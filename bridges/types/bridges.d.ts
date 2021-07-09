import { electronBridge, storeBridge } from '..';

declare global {
  interface Window {
    electron: typeof electronBridge;
    api: typeof storeBridge;
  }
}
