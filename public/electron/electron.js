const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const { handleTitle, handleText, handleSaveOrder } = require("./handlers");
require("./DB/setup.js");

function createWindow() {
  const windw = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: isDev
        ? path.join(app.getAppPath(), "./public/electron/preload.js")
        : path.join(app.getAppPath(), "./build/electron/preload.js"),
    },
  });
  windw.webContents.openDevTools();

  windw.loadURL(
    isDev
      ? `http://127.0.0.1:5173/`
      : path.join(__dirname, "../build/index.html")
  );

  ipcMain.on("set-title", handleTitle);
  ipcMain.handle("set-text", handleText);
  ipcMain.handle("save-order", handleSaveOrder);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    ipcMain.on("set-title");
    createWindow();
  }
});
