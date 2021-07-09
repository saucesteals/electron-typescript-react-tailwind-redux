const { ipcRenderer, contextBridge } = require("electron");

export const electronBridge = {
  quit: () => {
    ipcRenderer.send("quit-app");
  },
  hide: () => {
    ipcRenderer.send("hide-app");
  },

  relaunch: () => {
    ipcRenderer.send("relaunch-app");
  },
};

contextBridge.exposeInMainWorld("electron", electronBridge);
