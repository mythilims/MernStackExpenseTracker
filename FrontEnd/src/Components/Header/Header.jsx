// import {AppBar, Toolbar, Typography,Avatar  ,Box, IconButton, Menu, MenuItem } from '@mui/material';
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useState } from 'react';
// function Header () {
//     const [anchorEl, setAnchorEl] = useState(null);
//       const open = Boolean(anchorEl);
//     const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };
//    const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//     return (
//         <>
//          <AppBar position='static' sx={{ background: 'linear-gradient(45deg, #FFD700, #FFA500)',fontWeight: 'bold' }}>
//            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
//               <Typography variant='h6' >💼 Expense Tracker</Typography>
//               <Box sx={{display:'flex',alignItems:'center',gap:1,color:'white'}}>
//                 <Avatar>M</Avatar>
//                 <Typography>Mythili</Typography>
//                 <IconButton onClick={handleMenuOpen}>
//                     <ArrowDropDownIcon />
//                 </IconButton>
//                 <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
//                     <MenuItem onClick={handleLogout}>Log Out
//                     </MenuItem>
//                 </Menu>
//               </Box>

//            </Toolbar>
//          </AppBar>
//         </>
//     )
// }

// export default Header;

// Components/Header.jsx
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Expense Tracker Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
