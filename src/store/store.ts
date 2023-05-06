import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "itunes",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
