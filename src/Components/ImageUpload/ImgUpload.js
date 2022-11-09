import { Box } from "@mui/material";
import React from "react";
  
function ImgUpload(props) {
    
  
    return (
        <Box sx={{width:"100%"}}>
            <p style={{display:"inline-block", marginRight:"20px", fontWeight:"bold"}}>Upload Profile Image:</p>
            <input style={{display:"inline-block", border:"1px solid lightgrey", padding: "5px", width:"80%", fontWeight:"bold"}} type="file" onChange={props.onChange} />
            
  
        </Box>
  
    );
}
  
export default ImgUpload;