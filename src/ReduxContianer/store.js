import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
const persistedStore = persistStore(store);
export { persistedStore };

// export const persistor = persistStore(store);
