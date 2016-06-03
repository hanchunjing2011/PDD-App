import { store } from './redux/store/mainStore'
import { getPosition, moveTo, openWindow } from './mainProcess/desktop'
import electron from 'electron'
import { app, ipcMain, BrowserWindow } from 'electron'
import { window_move_to, window_open } from './communicate/communicationTypes'   
import { config } from './common/config'
import { 
  moveWindow, 
  openDevtools, 
  closeDevtools,
  showWindowID,
  closeWindowID,
  focusWindowID,
  openWindowID
} from './mainProcess/listenEvent'
import { welcome } from './renderProcess/winOptions'
// import { dao } from './dao/dao'
// import { logger } from './common/log4js'


let dataGlobal = {}
dataGlobal.win = []

app.on('ready', () => {
  let newWin = openWindow(BrowserWindow, 'welcome', welcome)
  dataGlobal.win['welcome'] = newWin
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
console.log(process.versions.node)
console.log(process.versions.chrome)
console.log(process.versions.electron)
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// setTimeout(function () {
//   console.log(dataGlobal)
// },2000)
//drag window 16-6-1
moveWindow(ipcMain, dataGlobal)
//if ready show window
showWindowID(ipcMain, dataGlobal)
closeWindowID(ipcMain, dataGlobal)
focusWindowID(ipcMain, dataGlobal)
openWindowID(ipcMain, dataGlobal, BrowserWindow)
// openDevtools(ipcMain, dataGlobal)
// closeDevtools(ipcMain, dataGlobal)
