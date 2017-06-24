const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url');

let mainWindow;

const config = {
  width: 800,
  height: 600,
};

function createInstance() {
  const html = process.env.NODE_ENV === 'development' ? 'app.dev.html' : 'app.prod.html';

  mainWindow = new BrowserWindow(config);
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, `./html/${html}`),
    protocol: 'file:',
    // slashes: true,
    // show: false,
  }));

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createInstance);

app.on('window-all-closed', () => {

});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createInstance()
  }
})
