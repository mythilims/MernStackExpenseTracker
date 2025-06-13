import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/login';

function App() {
  // const [getStateList, setState] = useState([]);
  // useEffect(() => {
  //   async function dataList() {
  //     try {
       
        
  //       let data = await fetch('http://127.0.0.1:8080/state/all',{
  //         headers:{
  //           "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NGE0NDZkMjZiMWY1MTk3ODBmNDhkYSIsImlhdCI6MTc0OTcwNTIyOSwiZXhwIjoxNzQ5NzA1MzQ5fQ.Irz_T45zqSYkDPzea9aR1iH6irmVdlqOFR1SqQ9ldko"
  //         }
  //       });
  //       let response = await data.json();
  //       setState(response);
  //     } catch {
  //       console.log('Failed to fetch data');
  //       setState([]);
  //     }
  //   }
  //   dataList();
  // }, []);

  return (
    <div className="login" >
         <Login />
         
         <ToastContainer/>
    </div>
  );
}

export default App;
