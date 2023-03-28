import { Container } from '@mui/system'
import React, { useState } from 'react'
import {State,City} from "country-state-city"
import { Button, FormControl, MenuItem,  Select,  TextareaAutosize, Typography} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebaseconfig';
import { useNavigate } from 'react-router';


function MobileDescription() {
    
    const [formData,setFormData] = useState({
        description:""
    })

    const navigate = useNavigate();
    const collectionRef  = collection(database,'posts');


    function handleinput(event){
          event.preventDefault();
          const name = event.target.name;
          const value = event.target.value;
          setFormData({...formData,[name]:value});
          
    }
    
    function handleSubmit(){
        const {stateName,cityName,description,plevel} = formData;
        const imagelink = localStorage.getItem("filelink")
        if( !stateName | !cityName | !description | !plevel ){
            alert("Fill all the Details");
        }
        else{
            if(description.length > 180){
                alert("description should be 180 Character Long")
            }
            else{
            addDoc(collectionRef,{
                 image:imagelink,
                 description:description,
                 city:cityName,
                 plevel:plevel
            }).then(()=>{
                console.log("data added");
                navigate("/")
            }).catch((err)=>{
                alert(err);
            })
                        }
                    }
                }
  return (
    <div>
    <Container sx={{width:"100%",height:"100vh",bgcolor:"#7CB9E8",overflow:"hidden"}}>
    <Container sx={{textAlign:"center",
        bgcolor:"#0066b2",height:"85vh",margin:"9% 0%",padding:" 8% 4% 0% 4%",borderRadius:"22px",boxShadow:"8px 13px 64px -22px rgba(61,72,235,1)"
}}>
    <FormControl fullWidth >
          <Typography variant="body1" color="black" sx={{marginTop:"2%"}}>State:</Typography>
          <Select name="stateName" value={formData.stateName}  onChange={handleinput}> 
          {
            State.getStatesOfCountry("IN").map((ele)=>
                <MenuItem value={ele.isoCode}>{ele.name}</MenuItem>
            )
          }   
          </Select>
          <Typography variant="body1" color="black">City:</Typography>
          <Select name="cityName" value={formData.cityName} onChange={handleinput}>
          {
            City.getCitiesOfState("IN",formData.stateName).map((ele)=>
                <MenuItem value={ele.name}>{ele.name}</MenuItem>
            )
          }   
          </Select>
          <Typography variant="h5" color="black"
            sx={{marginTop:"5%",marginBottom:"2%"}}
          >Description:
          
          </Typography>

          <TextareaAutosize
          minRows={5}
          name="description"
          value={formData.description}
          onChange={handleinput}
          ></TextareaAutosize>

          <Typography variant="body2" sx={{marginLeft:"80%",marginTop:"1%",color:"white"}}>{formData.description.length}/180</Typography>

          <Typography variant="body1" color="black"
          sx={{marginTop:"2%",marginBottom:"1%"}}
        >Problem Level:</Typography>

          <Select name="plevel" value={formData.plevel} onChange={handleinput}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
          </Select>
          <Button variant='contained'onClick={handleSubmit} sx={{marginTop:"3%",height:"4rem"}}>Submit</Button>
    </FormControl>   
    </Container>
   </Container>
    </div>
  )
}

export default MobileDescription