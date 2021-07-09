import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers';
import {
  writeConfigRequest,
  writeConfigResponse,
  readConfigResponse,
  readConfigRequest,
} from 'secure-electron-store';

const persistConfig = {
  key: 'root',
  storage: {
    getItem: (key: string) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive(readConfigResponse, function (args: any) {
          if (args.key !== key) return;

          if (args.success) {
            resolve(args.value);
          } else {
            reject();
          }
        });

        window.api.store.send(readConfigRequest, key);
      });
    },
    setItem: (key: string, item: any) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive(writeConfigResponse, (args: any) => {
          if (args.key !== key) return;

          if (args.success) {
            resolve(item);
          } else {
            reject();
          }
        });
        window.api.store.send(writeConfigRequest, key, item);
      });
    },
    removeItem: (key: string) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive(writeConfigResponse, (args: any) => {
          if (args.key !== key) return;

          if (args.success) {
            resolve(null);
          } else {
            reject();
          }
        });
        window.api.store.set(writeConfigRequest, key, null);
      });
    },
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
