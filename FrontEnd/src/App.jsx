import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/login';

function App() {
  
  return (
    <div className="login" >
         <Login />
         
         <ToastContainer/>
    </div>
  );
}

export default App;
