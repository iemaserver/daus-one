import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import ProfilePreview from './ProfilePreview';
import { Grid, Paper } from '@mui/material';
import ImgUpload from '../../../ImageUpload/ImgUpload';
import ProfileDetails from './ProfileDetails';
import ProfileDetailsForm from './ProfileDetailsForm';
import ProfileStatus from './ProfileStatus';



// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('595')]: {
//     width: "100%",
//     minHeight: "80%",
//     display: "inline-block",
//   },
//   [theme.breakpoints.up('596')]: {
//     maxWidth: "100%",
//     minHeight: "100%",
//     display: "inline-block",
//   },
// }));

export default function Profile() {
  const [file, setFile] = useState('');
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>

      <Grid container spacing={2} height="100%">
        <Grid item lg={3} xs={12} sm={12} md={3} >
          <Paper 
          sx={{
            display: "flex",
            flexFlow: "column",
            height: "90vh",
            
          }}
          elevation={3}>
            <ProfilePreview file={file}/>
          </Paper>
        </Grid>
        <Grid item lg={9} xs={12} sm={12} md={9}>
          <Paper elevation={3} sx={{ padding: "20px", height: "100%" ,backgroundColor:"#fbf9ec"}}>
            <ProfileDetails name={"Profile Details"}>
              <ImgUpload onChange={handleChange}/>
              <ProfileDetailsForm />
            </ProfileDetails>
            <ProfileDetails name={"Profile Status"}>
              <ProfileStatus />
            </ProfileDetails>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}