const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Function to create the main application window
function createMainWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // Note: contextIsolation and nodeIntegration might be needed for newer Electron versions
      // contextIsolation: true,
      // nodeIntegration: false,
    }
  });

  mainWindow.loadFile('index.html');
  // Optionally open DevTools:
  // mainWindow.webContents.openDevTools();
}

// Function to create the help window
function createHelpWindow() {
    const helpWindow = new BrowserWindow({
        width: 800,
        height: 700,
        title: 'Teleprompter Plus Help'
    });

    helpWindow.loadFile(path.join(__dirname, 'help.html'));
    // Help windows don't need a menu
    helpWindow.setMenu(null);
}

// Define the application menu template
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                click: () => {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'About Teleprompter Plus',
                click: () => {
                    createHelpWindow();
                }
            }
        ]
    }
];

app.whenReady().then(() => {
  // Create the main window
  createMainWindow();

  // Build and set the application menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});