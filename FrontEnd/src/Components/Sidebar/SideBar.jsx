// import { Box , Card, Divider, Typography} from "@mui/material";

// function Sidebar () {
//     return (
//         <>
//         <Box sx={{width:250}}>
//             <Card sx={{p:2}}>
//             <Typography variant="h5"  fontWeight={'bold'}>
//                 Sidebar
//             </Typography>
//             <Divider />
//             <Box sx={{mt:2}}>Dashboard</Box>
//             <Box sx={{mt:2}}>Expense Tracker</Box>
//             </Card>
//         </Box>
//         </>
//     )
// }

// export default Sidebar;

// Components/Sidebar.jsx
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
const location = useLocation();
const menuItems = [
  { label: "Expense List", path: "/dashboard/expense-list" },
  { label: "Add Expense", path: "/dashboard/add-expense" },
  { label: "Logout", path: "/" }
];

return (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
    
      width: 240,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", top: "64px" }
    }}
  >
    <List >
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.path}
          component={Link}
          sx={{ color: 'green' }}
          to={item.path}
          selected={location.pathname === item.path}
        >
          <ListItemText primary={item.label} sx={{ color: 'green' }} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);
};

export default Sidebar;
