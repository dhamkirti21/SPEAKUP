import { useMediaQuery, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Feed from './routes/Feed';
import MobileDescription from './routes/MobileDescription';
import MobilePost from './routes/MobilePost';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';

function App() {
  const matches = useMediaQuery("(min-width:200px) and (max-width:1000px)");

  function AllRoutes(){
     return(
         <React.Fragment>
         <Routes>
         <Route path='/' element={<Feed/>}/>
         <Route path='/post' element={<MobilePost/>}/>
         <Route path='/post-desc' element={<MobileDescription/>}/>
         </Routes>
         </React.Fragment>
     )
  }

  function PhoneorTablet(){
      return (
         <React.Fragment>
           <Container maxWidth="xs" sx={{marginTop:"15%",width:"20rem",bgcolor:"#6699CC",borderRadius:"22px",justifyContent:"center","fontFamily":"cursive"}}>
              <h1>Please Use your Phone or Tablet</h1>
              <br/>
              <PhoneAndroidIcon  sx={{fontSize:"5rem"}}/>
              <TabletAndroidIcon  sx={{fontSize:"7rem"}}/>
           </Container>
         </React.Fragment>
      )

  }
  return (
     <>
      {
        matches ? <AllRoutes/> : <PhoneorTablet/>
      }
     </>
  );
}

export default App;
