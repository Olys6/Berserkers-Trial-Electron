const { app, BrowserWindow } = require('electron')
// const electronInstaller = require('electron-winstaller');

// try {
//     await electronInstaller.createWindowsInstaller({
//         appDirectory: '/tmp/build/my-app-64',
//         outputDirectory: '/tmp/build/installer64',
//         authors: 'My App Inc.',
//         exe: 'Berserkers-Trial.exe'
//     });
//     console.log('It worked!');
// } catch (e) {
//     console.log(`No dice: ${e.message}`);
// }

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 750
    })

    win.loadFile('index.html')
    win.setResizable(false)
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})