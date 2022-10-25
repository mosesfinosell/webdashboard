const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./storedb.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

// db.serialize(() => {
//   //db.run("CREATE TABLE order (info TEXT)");
// //CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING NOT NULL, buyer_name STRING NOT NULL, buyer_email STRING NOT NULL, buyer_phone STRING NOT NULL, shipping_address STRING NOT NULL, order_status STRING NOT NULL, sales_channel STRING NOT NULL, payment_status STRING NOT NULL, payment_method STRING NOT NULL, order_id STRING NOT NULL, order_date INTEGER NOT NULL, totalamount INTEGER NOT NULL, business_id STRING NOT NULL, products STRING NOT NULL, uploaded STRING DEFAULT 'false');
//   try {
//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//       console.log(row.id + ": " + row.info);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

db.close();
