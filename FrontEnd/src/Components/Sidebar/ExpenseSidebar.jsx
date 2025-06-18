import { Divider, Drawer, List, ListItem, ListItemText ,Typography} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const ExpenseSidebar = () => {
  const location = useLocation();
    console.log("3");

  const menuItems = [
    { label: "Dashboard", path: "/ExpenseDashboard" },
    { label: "Expense List", path: "/expenselist" },
    { label: "Add Expense", path: "/addexpense" },
    
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {  border:'2px solid black', backgroundColor: "#f5f5f5",width: 240, boxSizing: "border-box", top: "64px" }
      }}
    >
      <List >
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={ <Typography variant="h1" sx={{ color: 'black', fontSize: "20px", fontWeight: 700 }}>
      {item.label} <Divider sx={{p:1,borderLeft:'2px solid black'}}/>
    </Typography>}   />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};


export default ExpenseSidebar;