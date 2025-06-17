import { Outlet } from "react-router-dom";
import ExpenseHeader from "../Header/ExpenseHeader";
import ExpenseSidebar from "../Sidebar/ExpenseSidebar";
function LayOut() {
  return (
    <>
    
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <ExpenseHeader />
        <div style={{ display: "flex", flex: 1 }}>
          <ExpenseSidebar />
          <main style={{ flex: 1, 
            padding: "1rem",
             overflow: "auto" }}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default LayOut;
