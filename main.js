const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
    // webPreferences: {
    //   preload: path.join(__dirname, './src/script/preload.js')
    // }
  })

  win.loadFile('./public/index.html')
}

app.whenReady().then(() => {
  createWindow()

  // 关闭全部窗口后退出应用(macOS除外)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  // macOS下，激活时没有窗口就打开一个新的
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
