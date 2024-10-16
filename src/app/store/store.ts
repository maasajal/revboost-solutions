// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // স্থানীয় স্টোরেজ ব্যবহার করুন
import addressSlice from "../features/companyExpense/addressSlice";
import incomesReducer from "../features/companyIncome/incomeSlice";
import expenseReducer from "../features/expenses/expenseSlice";
import authReducer from "../features/firebaseAuthentication/authSlice"; // আপনার authSlice এর সঠিক পাথ ব্যবহার করুন
import getAllUsersSlice from "../features/getAllUsers/getAllUsersSlice";
import payrollReducer from "../features/payroll/payrollSlice";
import revenueGrowthReducer from "../features/revenueGrowth/revenueGrowthSlice";
import revenueReducer from "../features/revenueGrowth/revenueSlice";
import roleManageSlice from "../features/roleManage/roleManageSlice";
import currentUserReducer from "../features/users/currentUserSlice";
import usersReducer from "../features/users/usersSlice";
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
    revenue: revenueReducer,
    payroll: payrollReducer,
    incomes: incomesReducer, // get users data from the MongoDB userCollections
    expenses: expenseReducer,
    address: addressSlice,
    allUsers: getAllUsersSlice,
    role_manage: roleManageSlice,
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
