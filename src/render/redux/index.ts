import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import countReducer from "./reducers/count";
import charReducer from "./reducers/characters";

// Persistance Config for redux-persist
const persistConfig = {
  key: "root",
  version: 1,
  storage: {
    // Stoage config for electron-persist-secure
    setItem: window.store.set,
    getItem: window.store.get,
    removeItem: window.store.delete,
  },
};

// Make our reducers persistant
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    count: countReducer,
    char: charReducer,
  })
);

// Create our store
export const store = configureStore({
  reducer: { example: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Make the store persistant
export const persistor = persistStore(store);
