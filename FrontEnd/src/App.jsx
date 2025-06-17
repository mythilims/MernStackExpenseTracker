import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Login from './Components/login';
import Login from './Components/Login/Loing';
import ExpenseTrackerList from './Components/Expenses/ExpenseTrackerList';
import AddExpenseTracker from './Components/Expenses/AddExpesneTracker';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashboardLayout from './Components/DashBoard/Dashboard';
import Signup from './Components/Login/Signup';
import LayOut from './Components/LayOut/LayOut';
import ExpenseDashboard from './Components/DashBoard/ExpenseDashboard';

function App() {
  return (
    <div className="" >
      <BrowserRouter>
      <Routes>
        <Route path='' element={<><Login /></>} >
         
        </Route>
        <Route path='/Signup' element={<> <Signup /></>} >
        </Route>
         {/* <Route path='/ExpenseDashboard' element={<><LayOut /></>} >
            <Route index element={<> <ExpenseDashboard /></>} >
            
        </Route>
        <Route path='/expenselist' element={<> <ExpenseTrackerList /></>} >
            
        </Route>
        <Route path='/addexpense' element={<> <AddExpenseTracker /></>} >
            
        </Route>
        </Route> */}
         <Route path="/" element={<LayOut />}>
          <Route path="expensedashboard" element={<ExpenseDashboard />} />
          <Route path="expenselist" element={<ExpenseTrackerList />} />
          <Route path="addexpense" element={<AddExpenseTracker />} />
        </Route>
        
      </Routes>
      
     
      </BrowserRouter>
      <ToastContainer/>
         {/* <BrowserRouter>
         <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="expense-list" element={<ExpenseTrackerList />} />
          <Route path="add-expense" element={<AddExpenseTracker />} />
        </Route></Routes>
             </BrowserRouter>
         <ToastContainer/> */}
    </div>
  );
}

export default App;
