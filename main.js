const { app, BrowserWindow } = require('electron');

// this will be the window
let win;

// this is the function that will create the window
function cmw() {
  // this creates the window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // this loads the view/index.html into the window
  win.loadFile('view/index.html');
}

// this creates the window when the app is ready
app.whenReady().then(() => {
  // running the function that creates the window
  cmw();

  // if there is no windows, create one
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) cmw();
  });
});

// a weird mac thing (p.s. i don't hate mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
