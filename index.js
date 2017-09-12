'use strict'

const {
    app,
    BrowserWindow
} = require('electron')

app.on('before-quit', () => {
    console.log('Saliendo');
})

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 300,
        height: 400,
        center: true,
        title: 'LOGIN',
        maximizable: false,
        autoHideMenuBar: true
    })

    win.on('closed', () => {
        win = null
        app.quit()
    })
})