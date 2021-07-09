import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: {
    getItem: (key: string) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive('ReadConfig-Response', function (args: any) {
          if (args.key !== key) return;

          if (args.success) {
            resolve(args.value);
          } else {
            reject();
          }
        });

        window.api.store.send('ReadConfig-Request', key);
      });
    },
    setItem: (key: string, item: any) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive('WriteConfig-Response', (args: any) => {
          if (args.key !== key) return;

          if (args.success) {
            resolve(item);
          } else {
            reject();
          }
        });
        window.api.store.send('WriteConfig-Request', key, item);
      });
    },
    removeItem: (key: string) => {
      return new Promise((resolve, reject) => {
        window.api.store.onReceive('WriteConfig-Response', (args: any) => {
          if (args.key !== key) return;

          if (args.success) {
            resolve(null);
          } else {
            reject();
          }
        });
        window.api.store.send('WriteConfig-Request', key, null);
      });
    },
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
