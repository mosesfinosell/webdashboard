const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  setText: (text) => ipcRenderer.invoke("set-text", text),
  saveOrder: (order) => ipcRenderer.invoke("save-order", order),
});
