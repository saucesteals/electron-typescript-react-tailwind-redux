import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: {
    setItem: window.store.set,
    getItem: window.store.get,
    removeItem: window.store.delete,
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
