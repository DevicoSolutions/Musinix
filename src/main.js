/** @flow */
import Electron, {app, BrowserWindow} from 'electron'
import MenuBar from 'menubar'
import path from 'path'
import WindowStateKeeper from 'electron-window-state'
import ConfigStore from 'configstore'

const Config = new ConfigStore('misinix')
const baseName = process.env.NODE_ENV === 'production' 
  ? `Musinix ${process.env.VERSION}`
  : `Musinix Dev`
let mainWindow

// app.setName(baseName)
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())

app.on('ready', () => {
  const mainWindowState = WindowStateKeeper({
    defaultWidth: 700,
    defaultHeight: 450
  })
  mainWindow = new BrowserWindow({
    width: 700,
    height: 450,
    darkTheme: true,
    frame: false,
    resizable: true,
    icon: `${__dirname}/../static/icon.png`
  })
  mainWindow.loadURL(`file://${path.resolve(__dirname,'../static/index.html')}`)
  if (process.env.NODE_ENV !== 'production') {
    mainWindow.openDevTools()
  }
  mainWindowState.manage(mainWindow)
})

// mb.on('show', () => mb.window.webContents.send('show'))
