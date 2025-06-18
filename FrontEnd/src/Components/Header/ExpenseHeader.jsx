import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  // Menu,MenuItem
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function ExpenseHeader() {
  const navigate = useNavigate();
  const { userDetails } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <AppBar
        sx={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.5))",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.5))",

            // background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))'
          }}
        >
          <Typography variant="h5" sx={{fontSize:'20px',fontWeight:'bold'}}>Expense Tracker</Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar>{userDetails?.name?.toUpperCase().charAt(0)}</Avatar>
            <Typography>{userDetails?.name?.toUpperCase()}</Typography>
            <IconButton onClick={handleMenuOpen} >
              <ArrowDropDownIcon  sx={{backgroundColor:'white'}}/>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default ExpenseHeader;
