import { electronBridge, storeBridge } from '..';

declare global {
  interface Window {
    electron: typeof electronBridge;
    store: typeof storeBridge;
  }
}
