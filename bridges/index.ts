const { ipcRenderer, contextBridge } = require('electron');
const fs = require('fs');
const Store = require('secure-electron-store').default;

export const electronBridge = {
  quit: () => {
    ipcRenderer.send('quit-app');
  },
  hide: () => {
    ipcRenderer.send('hide-app');
  },

  relaunch: () => {
    ipcRenderer.send('relaunch-app');
  },
};

contextBridge.exposeInMainWorld('electron', electronBridge);

// Create the electron store to be made available in the renderer process
const store = new Store({ encrypt: false, minify: false });

export const storeBridge = {
  store: store.preloadBindings(ipcRenderer, fs),
};

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  store: store.preloadBindings(ipcRenderer, fs),
});
