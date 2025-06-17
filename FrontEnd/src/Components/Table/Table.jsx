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
  Paper
} from "@mui/material";

function TableComponent({ list }) {
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
                { ['sno', 'name', 'amount', 'category', 'date', 'paymentMethod', 'notes'].map((item, key) => (
                  <TableCell key={key} sx={{ fontWeight: "bold" }}>
                    {item.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.data.map((row, idx) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default TableComponent;
