import { electronBridge } from ".";

declare global {
  interface Window {
    electron: typeof electronBridge;
  }
}
