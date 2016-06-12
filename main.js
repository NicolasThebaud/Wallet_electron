const electron = require('electron')

const app = electron.app,
	BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', _=>mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', _=>{
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', _=>{
  if (mainWindow === null) createWindow()
})