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
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ borderLeft: "2px solid #1976d2" }}>
            Expense Tracker
          </Typography>
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
            <IconButton onClick={handleMenuOpen}>
              <ArrowDropDownIcon />
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
