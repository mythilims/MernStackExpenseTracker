import { AppBar, Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography
    // Menu,MenuItem
 } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function ExpenseHeader () {
    return (
        <>
       <AppBar>
        <Toolbar sx={{display:'flex',flexDirection:'row' ,justifyContent:'space-between'}}>
            <Typography sx={{borderLeft:'2px solid #1976d2'}}>
                Expense Tracker
            </Typography>
            <Stack sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center',gap:2}}>
               <Avatar>M</Avatar>
                <Typography>
                Mythili
            </Typography>
            <IconButton >
                <ArrowDropDownIcon />
            </IconButton>
           <Menu>
            <MenuItem>Logout</MenuItem>
           </Menu>
            </Stack>
            
        </Toolbar>
       </AppBar>
        
        </>
    )
}

export default ExpenseHeader;