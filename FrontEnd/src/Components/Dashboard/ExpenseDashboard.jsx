import { Box, Typography ,Paper} from "@mui/material";
import ExpenseTrackerList from "../Expenses/ExpenseTrackerList";

function ExpenseDashboard () {
    return (
        <>
         <Box
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        p: 3,
        minHeight: "calc(100vh - 64px)", // Adjust if AppBar is 64px height
        overflow: "auto",
        position:"fixed"
      }}
    >
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
    </Box>
        </>
    )
}

export default ExpenseDashboard;