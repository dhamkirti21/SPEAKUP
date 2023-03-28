import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Navigation() {
  const navigate = useNavigate()

  function handleClick(){
      navigate("/post");
  }
  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0,borderRadius:"20px 20px 0px 0px"}}>
        <Toolbar 
        sx={{
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          <Avatar
            sx={{
              bgcolor: "#3457D5",
              color:"white",
              zIndex:"2",
              width: "5rem",
              height: "5rem",
              bottom:"2rem"
            }}
            onClick={handleClick}
          >
            <CameraAltIcon fontSize="large"/>
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
