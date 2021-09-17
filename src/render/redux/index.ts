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
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Persistance Config for redux-persist
const persistConfig = {
  key: "root",
  version: 1,
  storage: {
    // Storage config for electron-persist-secure
    setItem: window.store.set,
    getItem: window.store.get,
    removeItem: window.store.delete,
  },

  // Skip JSON.stringify(data) before storing it
  // You can remove this if you do not want your store in the persisted file to be formatted
  serialize: false,

  // window.store.get already returns deserialized data
  deserialize: false,
};

// Make our reducers persistent
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: countReducer,
    char: charReducer,
  })
);

// Create our store
export const store = configureStore({
  reducer: { example: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore all actions that redux-persist has
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

// Make the store persistent
export const persistor = persistStore(store);
