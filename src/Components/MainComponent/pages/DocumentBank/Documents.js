import ArticleIcon from "@mui/icons-material/Article";
import { Grid, Paper } from "@mui/material";
import React from "react";
import "./Document.css";
import DocumentList from "./DocumentList";

const hrDocs = [
  { icon: <ArticleIcon />, label: "CV" },
  {
    icon: <ArticleIcon />,
    label: "Certificate of Completion of training (CCT)",
  },
  { icon: <ArticleIcon />, label: "Disclosure Barring Service (DBS)" },
  { icon: <ArticleIcon />, label: "Indemnity" },
  { icon: <ArticleIcon />, label: "Professional registration - GMC" },
  { icon: <ArticleIcon />, label: "Right to work (Passport/Driving Licence)" },
];
const mandateTrainingDocs = [
  { icon: <ArticleIcon />, label: "BLS, AED" },
  { icon: <ArticleIcon />, label: "Anaphylaxis" },
  { icon: <ArticleIcon />, label: "Infection Prevention Control" },
  { icon: <ArticleIcon />, label: "Fire safety" },
  { icon: <ArticleIcon />, label: "Mental Capacity Act" },
  { icon: <ArticleIcon />, label: "Deprivation of Liberty Standards" },
  { icon: <ArticleIcon />, label: "Safeguarding adults" },
  { icon: <ArticleIcon />, label: "Safeguarding children" },
  { icon: <ArticleIcon />, label: "Chaperone awareness" },
  { icon: <ArticleIcon />, label: "Conflict resolution" },
  { icon: <ArticleIcon />, label: "Data security awareness" },
  { icon: <ArticleIcon />, label: "Duty of candour" },
  { icon: <ArticleIcon />, label: "Equality, diversity and human rights" },
  { icon: <ArticleIcon />, label: "H&S" },
  { icon: <ArticleIcon />, label: "Moving & handling" },
  { icon: <ArticleIcon />, label: "Preventing radicalisation" },
  { icon: <ArticleIcon />, label: "Sepsis" },
  { icon: <ArticleIcon />, label: "Whistleblowing" },
];

function Documents() {
  return (
    <Grid container spacing={2} height="100%">
      <Grid item lg={3} xs={12} sm={12} md={3}>
        <DocumentList hrDocs={hrDocs} mandateTrainingDocs={mandateTrainingDocs}/>
      </Grid>
      <Grid item lg={9} xs={12} sm={12} md={9}>
        <Paper
        className="scrollbarHidden"
        sx={{
          display: "flex",
          flexFlow: "column",
          height: "90vh",
          overflowY: "scroll",
          padding:"20px"
        }}>

        </Paper>
      </Grid>
    </Grid>

    // <Grid container spacing={2} >
    //   <Grid item sx={{height:"calc(100vh-45px)"}} lg={3} xs={12} sm={12} md={3} fullHeight elevation={3}>
    //     <Paper elevation={3}>
    // <List sx={{ width: '100%', height:"calc(100vh-45px)", bgcolor: 'white'}}>
    //   <ListItem>
    //   <ItemList open={open} setOpen={setOpen} data={data} />
    //   </ListItem>
    //   <ListItem>
    //   <ItemList open={open2} setOpen={setOpen2} data={data2} />
    //   </ListItem>
    //   <ListItem>
    //   <ItemList open={open3} setOpen={setOpen3} data={data2} />
    //   </ListItem>
    //   <ListItem>
    //   <ItemList open={open3} setOpen={setOpen3} data={data2} />
    //   </ListItem>
    // </List>
    //     </Paper>
    //   </Grid>
    //   <Grid item lg={9} xs={12} sm={12} md={9}>
    //     <Paper sx={{padding:"20px", textAlign:"center"}}>
    //         <img  src="/Images/Profile/avatar2.jpg" width="100%" height="800px"/>
    //     </Paper>
    //   </Grid>
    // </Grid>
  );
}

export default Documents;
