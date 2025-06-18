import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login/Loing";
import ExpenseTrackerList from "./Components/Expenses/ExpenseTrackerList";
import AddExpenseTracker from "./Components/Expenses/AddExpesneTracker";
import Signup from "./Components/Login/Signup";
import LayOut from "./Components/LayOut/LayOut";
// import Dashboard from "./Components/DashBoard/ExpenseDashboard";
import AuthProvider from "./Components/Context/AuthProvider";
function App() {
    console.log("5");

  return (
    <div className="App">
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
              {/* <Route path="expensedashboard" element={<Dashboard />} /> */}
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
