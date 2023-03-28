import { Container } from '@mui/system'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import BackupIcon from '@mui/icons-material/Backup';
import { Button, Input } from '@mui/material';
import {storage} from '../firebaseconfig'
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { useNavigate } from 'react-router';



function MobilePost() {

    const [file,setFile] = useState();
    const navigate = useNavigate();
    function handleInput(event){
        const fileUploaded = event.target.files[0];
        setFile(fileUploaded)
    }

    function Upload(){
        const storageRef = ref(storage,file.name);
    const uploadTask = uploadBytesResumable(storageRef,file);
    uploadTask.on('state_changed',(snapshot)=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes*100)
            console.log('Upload is '+ progress + "%done")

    },(err)=>{
            console.log(err.message);
    },
    ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadedURL)=>{       localStorage.setItem("filelink",downloadedURL);
        });
    }
    )
    navigate("/post-desc");
    }
  return (
    <div>
        <Container sx={{width:"100%",height:"100vh",bgcolor:"#7CB9E8",overflow:"hidden"}}>
        <Container sx={{textAlign:"center",
            bgcolor:"#0066b2",height:"85vh",
            padding:"10%",margin:"9% 0%",borderRadius:"22px",boxShadow:"8px 13px 64px -22px rgba(61,72,235,1)"
    }}>
            <BackupIcon sx={{fontSize:"5rem",color:"#13274F"}}/>
            <br/>
            <br/>
           <Typography variant="h2" color="initial">
           Upload </Typography>
           <br/>
           <Typography variant="h2" color="initial">
           Your  </Typography>
           <br/>
           <Typography variant="h2" color="initial">
           Image </Typography>

           <Input type="file" aria-label='Upload'label="Upload" sx={{bgcolor:"#002244",marginTop:"5%",padding:"5%",color:"#A3C1AD"}} onChange={handleInput}></Input>
           <Button variant='contained' sx={{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"3%",bgcolor:"#13274F",padding:"2%",width:"30%",height:"10%"}} onClick={Upload}>Upload</Button>
        </Container>
       </Container>
    </div>
  )
}

export default MobilePost