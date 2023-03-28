import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import { Card, CardContent,Typography } from '@mui/material'



function Post(props) {

  function pColor(plevel){
    if(plevel === "High"){
      return "#f88379"
    }
    else if(plevel === "Normal"){
      return "#ffb347"
    }
    else{
       return "#32cd32"
    }
}


  return (
    <div>
    <Card sx={{ maxWidth: "500" , width:"450",minWidth:"351", marginTop:"3%"}}>
    <CardMedia
      component="img"
      height="325"
      image={props.image}
      alt="Problem image"
      sx={{ maxWidth: "500" , width:"450",minWidth:"351"}}
    />
    <CardContent>
      <Typography variant="body1" color="text.secondary">
      {props.description}
      </Typography>
      <Typography variant="body1" color="primary" sx={{width:"max-content",float:"right",marginRight:"20px",marginTop:"3%"}}>{props.city}</Typography>
    <Typography variant="body1" color="initial" bgcolor={pColor(props.plevel)} sx={{width:"max-content",padding:"2%",borderRadius:"10px",marginTop:"2%"}}>{props.plevel}</Typography>
    </CardContent>

  </Card>
    </div>
  )
}

export default Post