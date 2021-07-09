const { ipcRenderer, contextBridge } = require('electron');
import { createStoreBindings } from 'electron-persist-secure';

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

export const storeBridge = createStoreBindings();

console.log('Created bindings');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('store', {
  ...storeBridge,
});
