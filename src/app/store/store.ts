// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // স্থানীয় স্টোরেজ ব্যবহার করুন
import addressSlice from "../features/companyExpense/addressSlice";
import incomesReducer from "../features/companyIncome/incomeSlice";
import invoicesReducer from "../features/companyIncome/invoiceSlice";
import expenseReducer from "../features/expenses/expenseSlice";
import authReducer from "../features/firebaseAuthentication/authSlice"; // আপনার authSlice এর সঠিক পাথ ব্যবহার করুন
import getAllUsersSlice from "../features/getAllUsers/getAllUsersSlice";
import payrollReducer from "../features/payroll/payrollSlice";
import revenueGrowthReducer from "../features/revenueGrowth/revenueGrowthSlice";
import monthlyRevenueReducer from "../features/revenueGrowth/monthlyRevenueSlice";
import quarterlyRevenueReducer from "../features/revenueGrowth/quarterlyRevenueSlice";
import halfYearlyRevenueReducer from "../features/revenueGrowth/halfYearlyRevenueSlice";
import yearlyRevenueReducer from "../features/revenueGrowth/yearlyRevenueSlice";
import totalRevenueGrowthReducer from "../features/revenueGrowth/totalRevenueSlice";
import revenueReducer from "../features/revenueGrowth/revenueSlice";
import roleManageSlice from "../features/roleManage/roleManageSlice";
import currentUserReducer from "../features/users/currentUserSlice";
import usersReducer from "../features/users/usersSlice";
import allIncomeReducer from "../features/companyIncome/incomesSlice";
import paymentsSlice from "../features/payments/paymentsSlice";

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
    monthlyRevenue: monthlyRevenueReducer,
    quarterlyRevenue: quarterlyRevenueReducer,
    halfYearlyRevenue: halfYearlyRevenueReducer,
    yearlyRevenue: yearlyRevenueReducer,
    totalRevenueGrowth: totalRevenueGrowthReducer,
    payroll: payrollReducer,
    incomes: incomesReducer,
    invoices: invoicesReducer,
    allIncome: allIncomeReducer,
    expenses: expenseReducer,
    address: addressSlice,
    allUsers: getAllUsersSlice,
    role_manage: roleManageSlice,
    payments: paymentsSlice,
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
