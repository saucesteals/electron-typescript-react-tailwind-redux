const { ipcRenderer, contextBridge } = require('electron')
import { createStoreBindings } from 'electron-persist-secure/lib/bindings'

export const electronBridge = {
    quit: () => {
        ipcRenderer.send('quit-app')
    },
    hide: () => {
        ipcRenderer.send('hide-app')
    },

    relaunch: () => {
        ipcRenderer.send('relaunch-app')
    },
}

contextBridge.exposeInMainWorld('electron', electronBridge)

export const storeBridge = createStoreBindings()

contextBridge.exposeInMainWorld('store', {
    ...storeBridge,
})
