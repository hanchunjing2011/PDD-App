import { 
    moveTo, 
    closeWindow, 
    showWindow,
    focusWindow,
    openWindow,
    getPosition
  } from './desktop'
import { 
		window_move_to, 
		window_show_devtool, 
		window_hide_devtool,
    window_show,
    window_close,
    window_focus,
    window_open 
	} from '../communicate/communicationTypes'





//event window api
export function moveWindow (ipcMain, dataGlobal) {
  ipcMain.on(window_move_to, (event, arg) => {
    let winID = arg.winID
    let position = getPosition(dataGlobal.win[winID])
    moveTo(dataGlobal.win[winID], position, arg)
  })
}

export function openDevtools (ipcMain, dataGlobal) {
	ipcMain.on(window_show_devtool, (event, arg) => {
		let winID = arg.winID
		dataGlobal.win[winID].webContents.openDevtools()
	})
}
export function closeDevtools (ipcMain, dataGlobal) {
	ipcMain.on(window_hide_devtool, (event, arg) => {
		let winID = arg.winID
		dataGlobal.win[winID].webContents.closeDevtools()
	})
}

export function showWindowID (ipcMain, dataGlobal) {
  ipcMain.on(window_show, (event, arg) => {
    let winID = arg.winID
    showWindow(dataGlobal.win[winID])
  })
}
export function closeWindowID (ipcMain, dataGlobal) {
  ipcMain.on(window_close, (event, arg) => {
    let winID = arg.winID
    console.log(winID)
    closeWindow(dataGlobal.win[winID])
  })
}
export function focusWindowID (ipcMain, dataGlobal) {
  ipcMain.on(window_focus, (event, arg) => {
    let winID = arg.winID
    focusWindow(dataGlobal.win[winID])
  })
}
export function openWindowID (ipcMain, dataGlobal, win) {
  ipcMain.on(window_open, (event, arg) => {
    let winID = arg.winID
    let options = arg.options
    let newWin = openWindow(win, winID, options)
    dataGlobal.win[winID] = newWin
  })
}