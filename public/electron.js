const path = require('path');

const { app, ipcMain, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
    
  
  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});  



//-------------------- print function -----------------

// List of all options at -
// https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
const printOptions = {
 silent: false,
 printBackground: true,
 color: true,
 margin: {
  marginType: 'printableArea',
 },
 landscape: false,
 pagesPerSheet: 1,
 collate: false,
 copies: 1,
 header: 'Page header',
 footer: 'Page footer',
};

//handle print
ipcMain.handle('printComponent', (event, url) => {
 let win = new BrowserWindow({ show: false });

 win.loadURL(url);

 win.webContents.on('did-finish-load', () => {
  win.webContents.print(printOptions, (success, failureReason) => {
   console.log('Print Initiated in Main...');
   if (!success) console.log(failureReason);
  });
 });
 return 'shown print dialog';
});

//handle preview
ipcMain.handle('previewComponent', (event, url) => {
 let win = new BrowserWindow({ title: 'Preview', show: false, autoHideMenuBar: true });
 win.loadURL(url);

 win.webContents.once('did-finish-load', () => {
  win.webContents.printToPDF(printOptions).then((data) => {
    let buf = Buffer.from(data);
    var data = buf.toString('base64');
    let url = 'data:application/pdf;base64,' + data;

    win.webContents.on('ready-to-show', () => {
     win.show();
     win.setTitle('Preview');
    });
	
    win.webContents.on('closed', () => win = null);
    win.loadURL(url);
   })
   .catch((error) => {
    console.log(error);
   });
 });
 return 'shown preview window';
});
