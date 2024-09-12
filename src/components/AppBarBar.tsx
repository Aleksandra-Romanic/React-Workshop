import { Search } from "@mui/icons-material";
import { AppBar, Box, IconButton, OutlinedInput, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import pd from '../assets/Vector.svg'
import { LogoBar } from "./LogoBar";
import user from '../assets/UserPhoto.svg'


export const AppBarBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: '#FFFFFF' }}>
            <Toolbar>
              <Typography style={{ color: 'black'}} > <LogoBar/></Typography>
              <OutlinedInput
              style={{margin: 'auto'}}
              endAdornment = {<IconButton><SearchIcon/></IconButton>}
              />
              <IconButton edge = 'end'><img src={user} alt='logo' className="pd-logo logo"   /></IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      );
}