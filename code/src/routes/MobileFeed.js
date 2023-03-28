import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import {database} from "../firebaseconfig"
import { collection,getDocs, QuerySnapshot } from "firebase/firestore";
import Post from "../components/Post";
import { Skeleton } from "@mui/material";


const MobileFeed = () => {

  const collectionRef  = collection(database,'posts');
  
  const [data,setdata] = useState([])


  const getData = () =>{
    const items = []
    getDocs(collectionRef).then((res)=>{
        res.docs.map((item)=>{
            items.push(item.data())
        })
        setdata(items)
    })
}
// useEffect(() => {
//     getData();
//     console.log("data updated");
// }, [data])

useEffect(() => {
  window.addEventListener('beforeunload', getData());
  return () => {
    window.removeEventListener('beforeunload', getData());
  };
}, []);

  return (
    <div >
        <Container sx={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"8rem"}} onLoad={()=>{ getData();
          console.log("data updated");}} >
          {
            data.map((ele)=>
              <Post image={ele.image} description={ele.description} city={ele.city} plevel={ele.plevel}/>
            )
          }
        </Container>  
        <Navigation/>
    </div>
  );
};

export default MobileFeed;
