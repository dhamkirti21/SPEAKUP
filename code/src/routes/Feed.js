import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFeed from "./MobileFeed";


const Feed = () => {
  const matches = useMediaQuery("(min-width:200px) and (max-width:1000px)");
  return (
    <div>{matches ? <MobileFeed /> : <h1>Please Use your phone or Tablet</h1>}</div>
  );
};

export default Feed;
