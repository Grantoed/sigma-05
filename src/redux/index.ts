import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./products/productsSlice";

const productsPersistConfig = {
  key: "products",
  storage,
};

export const store = configureStore({
  reducer: {
    products: persistReducer(productsPersistConfig, productsReducer),
  },
  devTools: true,
});

export const persistor = persistStore(store);
