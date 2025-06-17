// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   CircularProgress,
//   Paper,
//   Divider,
//   Avatar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
// } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/SideBar";
// import TableComponent from '../Table/Table'
// function ExpenseTrackerList() {
//   const navigate = useNavigate();

//   const [dataDetails, setDataDetails] = useState({
//     data: [],
//     column: [],
//     isLoading: true,
//   });

//   const [userInfo, setUserInfo] = useState({
//     name: "mythili",
//     email: "test@gmail.com",
//     isLoading: false,
//   });

//   useEffect(() => {
//     async function getExpenseList() {
//       try {
//         const data = await fetch("http://127.0.0.1:8080/expense/all");
//         const result = await data.json();

//         if (result.length > 0) {
//           const columns = ['sno','name','amount','category','date','paymentMethod','notes'];
//           result.forEach((item,key)=>{
//             item['sno'] =key+1;
//           })
//           setDataDetails({ data: result, column: columns, isLoading: false });
//         } else {
//           setDataDetails({ data: [], column: [], isLoading: false });
//         }
//       } catch (err) {
//         console.error("Expense fetch error:", err);
//         setDataDetails((prev) => ({ ...prev, isLoading: false }));
//       }
//     }

//     getExpenseList();
//   }, []);

// //   useEffect(() => {
// //     async function getUserInfo() {
// //       try {
// //         const res = await fetch("http://127.0.0.1:8080/user/profile");
// //         const result = await res.json();
// //         setUserInfo({ ...result, isLoading: false });
// //       } catch (e) {
// //         console.error("User fetch error:", e);
// //         setUserInfo((prev) => ({ ...prev, isLoading: false }));
// //       }
// //     }

// //     getUserInfo();
// //   }, []);

//   return (
//     <>
//       {/* <Header/> */}

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 2,
//           p: 3,
//           backgroundColor: "#f5f6f7",
//           height: "calc(100vh - 64px)",
//           boxSizing: "border-box",
//           overflow: "hidden",
//         }}
//       >
//         <Sidebar/>
//         <Box sx={{ flex: 1, overflow: "auto" }}>
//           <Card>
//             <CardContent sx={{ overflowX: "auto" }}>
//               <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
// <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 💰 Expense Tracker
//               </Typography>
//               <Button component={Link} to='/dashboard/add-expense' variant="contained" sx={{background: 'linear-gradient(45deg, #FFD700, #FFA500)'}}> Add Expense</Button>
//               </Box>

//               <Divider sx={{ mb: 2 }} />
//                 <TableComponent list={dataDetails} />

//             </CardContent>
//           </Card>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default ExpenseTrackerList;

import React, { useEffect, useState ,useContext} from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  CardHeader,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import TableComponent from "../Table/Table";
function ExpenseTrackerList() {
  const {token} =useContext(AuthContext)
  const [dataDetails, setDataDetails] = useState({
    data: [],
    column: [],
    isLoading: true,
  });

  useEffect(() => {
    async function getExpenseList() {
      try {
        const data = await fetch("http://127.0.0.1:8080/expense/all",{
          headers:{
            'content-type':'application/json',
            'Authorization':`Bearer ${token}`
          }
        });
        const result = await data.json();

        if (result.length > 0) {
          const columns = [
            "sno",
            "name",
            "amount",
            "category",
            "date",
            "paymentMethod",
            "notes",
          ];
          result.forEach((item, key) => {
            item["sno"] = key + 1;
          });
          setDataDetails({ data: result, column: columns, isLoading: false });
        } else {
          setDataDetails({ data: [], column: [], isLoading: false });
        }
      } catch (err) {
        console.error("Expense fetch error:", err);
        setDataDetails((prev) => ({ ...prev, isLoading: false }));
      }
    }

    getExpenseList();
  }, [token]);

  return (
    <Box
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        p: 3,
        minHeight: "calc(100vh - 64px)", // if you have Header 64px + margin
        overflow: "auto",
        position: "relative", // ✅ Fix here
        // width: "100%", // ✅ Make it take full width
        boxSizing: "border-box",
        padding: "2rem",
      }}
    >
      <Card>
        <CardHeader
          title=" Expense Tracker List"
          variant="h1"
          sx={{
              backgroundColor: "#f5f5f5",
              borderLeft: "2px solid #1976d2",
            }}
          action={
            <Button component={Link} to="/addexpense" variant="contained">
              Add Expense Tracker
            </Button>
          }
        ></CardHeader>

        <CardContent sx={{ overflowX: "auto" }}>
          <Divider sx={{ mb: 2 }} />
          <TableComponent list={dataDetails} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default ExpenseTrackerList;
