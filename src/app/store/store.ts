// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // স্থানীয় স্টোরেজ ব্যবহার করুন
import authReducer from "../features/firebaseAuthentication/authSlice"; // আপনার authSlice এর সঠিক পাথ ব্যবহার করুন
import usersReducer from "../features/users/usersSlice";
import currentUserReducer from "../features/users/currentUserSlice";
import revenueGrowthReducer from "../features/revenueGrowth/revenueGrowthSlice";
import payrollReducer from "../features/payroll/payrollSlice";
import incomesReducer from "../features/companyIncome/incomeSlice"


const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer); // authReducer কে persistReducer দিয়ে র‍্যাপ করুন

// Store কনফিগারেশন
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // authReducer যোগ করুন
    users: usersReducer, // get users data from the MongoDB userCollections
    currentUser: currentUserReducer,
    revenueGrowth: revenueGrowthReducer,
    payroll: payrollReducer,
    incomes: incomesReducer, // get users data from the MongoDB userCollections
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
