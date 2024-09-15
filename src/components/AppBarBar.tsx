import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import pd from "../assets/Vector.svg";
import { LogoBar } from "./LogoBar";
import user from "../assets/UserPhoto.svg";

export const AppBarBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "white", height: "64px" }}>
        <Toolbar>
          <Typography style={{ color: "black" }}>
            {" "}
            <LogoBar />
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              width: "370px",
              height: "50px",
              gap: "4px",
              outline: "none",
              background: "#F7F7F9",
              borderRadius: "20px",
              fieldset: { border: "none" }
            }}
            placeholder="Search for title or author"
            style={{ margin: "auto" }}
            slotProps={{
              input: {
                startAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              },
            }}
          />

          <IconButton edge="end">
            {" "}
            <img src={user} alt="logo" className="pd-logo logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
