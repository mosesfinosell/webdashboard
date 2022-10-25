const { BrowserWindow } = require("electron");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const handleTitle = (e, title) => {
  console.log(e, title);
  let win = BrowserWindow.fromWebContents(e.sender);
  win.setTitle(title);
};

const handleText = (e, text) => {
  console.log(e, text);

  return Promise.resolve(text);
};

const handleSaveOrder = (e, order) => {
  const db = new sqlite3.Database(
    path.resolve(__dirname, "DB/store.db"),
    function (err) {
      console.log(err);
    }
  );
  console.log(order);
  order.products = JSON.stringify(order.products);
  db.run(
    "INSERT INTO orders(title, buyer_name, buyer_email, buyer_phone, shipping_address, order_status, sales_channel, payment_status, payment_method, order_date, totalamount, business_id, products) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    Object.values(order),
    function (err) {
      if (err) {
        return console.log("Error inserting into db", err);
      }
      return console.log(`Row inserted`, this.lastID, this.changes);
    }
  );
  db.close();
  return "saved";
};

module.exports = { handleTitle, handleText, handleSaveOrder };
