/* eslint-disable @typescript-eslint/no-var-requires */
const { ipcRenderer, contextBridge, shell } = require("electron");
import { createStoreBindings } from "electron-persist-secure/lib/bindings";

export const electronBridge = {
  quit: (): void => {
    ipcRenderer.send("quit-app");
  },
  hide: (): void => {
    ipcRenderer.send("hide-app");
  },

  relaunch: (): void => {
    ipcRenderer.send("relaunch-app");
  },

  openUrl: (url: string): void => {
    shell.openExternal(url);
  },

  openPath: async (path: string): Promise<string> => {
    return await shell.openPath(path);
  },
};

contextBridge.exposeInMainWorld("electron", electronBridge);

export const storeBridge = createStoreBindings();

contextBridge.exposeInMainWorld("store", {
  ...storeBridge,
});
