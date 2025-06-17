import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Login from './Components/login';
import Login from "./Components/Login/Loing";
import ExpenseTrackerList from "./Components/Expenses/ExpenseTrackerList";
import AddExpenseTracker from "./Components/Expenses/AddExpesneTracker";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/DashBoard/Dashboard";
import Signup from "./Components/Login/Signup";
import LayOut from "./Components/LayOut/LayOut";
import ExpenseDashboard from "./Components/DashBoard/ExpenseDashboard";
import AuthProvider from "./Components/Context/AuthProvider";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
            <Route
              path="/Signup"
              element={
                <>
                  {" "}
                  <Signup />
                </>
              }
            ></Route>

            <Route path="/" element={<LayOut />}>
              <Route path="expensedashboard" element={<ExpenseDashboard />} />
              <Route path="expenselist" element={<ExpenseTrackerList />} />
              <Route path="addexpense" element={<AddExpenseTracker />} />

              <Route path="addexpense/:id" element={<AddExpenseTracker />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
