// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   CircularProgress,
// } from "@mui/material";

// function TableComponent({ list }) {
//   console.log(list);

//   return (
//     <>
//       {list.isLoading ? (
//         <CircularProgress />
//       ) : (
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {list.column.map((item, key) => {
//                   return <TableCell  key={key}>{item.toUpperCase()}</TableCell>;
//                 })}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {list.data.map((row, idx) => (
//                 <TableRow key={idx}>
//                   {list.column.map((col) => (
//                     <TableCell
//                       key={col}
//                       sx={{
//                         whiteSpace: "nowrap",
//                         padding: "6px 10px",
//                       }}
//                     >
//                       {String(row[col])}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </>
//   );
// }

// export default TableComponent;

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function TableComponent({ list }) {
    console.log("4");

  return (
    <>
      {list.isLoading ? (
        <CircularProgress />
      ) : false ? (
        <Typography sx={{ p: 2 }}>No expenses found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "sno",
                  "name",
                  "amount",
                  "category",
                  "date",
                  "paymentMethod",
                  "notes",
                  "Action",
                ].map((item, key) => (
                  <TableCell key={key} sx={{ fontWeight: "bold" }}>
                    {item.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.data.map((row, idx) => (
                <>
                  <TableRow key={idx}>
                    {list.column.map((col) => (
                      <TableCell
                        key={col}
                        sx={{
                          whiteSpace: "nowrap",
                          padding: "6px 10px",
                        }}
                      >
                        {String(row[col])}
                      </TableCell>
                    ))}
                    <TableCell sx={{ display: "flex" }}>
                      <IconButton
                        sx={{
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                          padding: "4px",
                          color:'white',
                          background:" black",
                          cursor:'pointer',
                          '&:hover':{
                            color:'white',
                          background:"black",
                            cursor:'pointer',

                          }
                          
                        }}
                        color="white"
                        component={Link}
                        to={`/addexpense/${row._id}`}
                      >
                        <EditOutlinedIcon />
                      </IconButton>
                      <IconButton color="error" disabled>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default TableComponent;
