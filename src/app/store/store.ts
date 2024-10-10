// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // স্থানীয় স্টোরেজ ব্যবহার করুন
import { counterSlice } from "../state/counter/counterSlice"; // আপনার counterSlice এর সঠিক পাথ ব্যবহার করুন
import authReducer from "../state/firebaseAuthentication/authSlice"; // আপনার authSlice এর সঠিক পাথ ব্যবহার করুন
import payrollReducer from "../state/payroll/payrollSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer); // authReducer কে persistReducer দিয়ে র‍্যাপ করুন

// Store কনফিগারেশন
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // authReducer যোগ করুন
    counter: counterSlice.reducer, // counterReducer যোগ করুন
    payroll: payrollReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // ignore specific actions
        ignoredPaths: ["register"], // ignore specific paths in the state
      },
    }),
});

// Persistor তৈরি করুন
export const persistor = persistStore(store);

// RootState ও AppDispatch টাইপস
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
