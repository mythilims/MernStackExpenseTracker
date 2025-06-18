import { AppBar, Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography
    // Menu,MenuItem
 } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext } from "react";
import AuthContext from '../Context/AuthContext'
function ExpenseHeader () {
      console.log("2");

    const {userDetails} =useContext(AuthContext)
    return (
        <>
       <AppBar>
        <Toolbar sx={{display:'flex',flexDirection:'row' ,justifyContent:'space-between'}}>
            <Typography sx={{borderLeft:'2px solid #1976d2'}}>
                Expense Tracker
            </Typography>
            <Stack sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center',gap:2}}>
               <Avatar>{userDetails?.name?.toUpperCase().charAt(0)}</Avatar>
                <Typography>
                {userDetails?.name?.toUpperCase()}
            </Typography>
            <IconButton >
                <ArrowDropDownIcon />
            </IconButton>
           <Menu>
            <MenuItem >Logout</MenuItem>
           </Menu>
            </Stack>
            
        </Toolbar>
       </AppBar>
        
        </>
    )
}

export default ExpenseHeader;