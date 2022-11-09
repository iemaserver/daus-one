import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import ProfilePreview from './ProfilePreview';
import { Grid } from '@mui/material';
import ImgUpload from '../../../ImageUpload/ImgUpload';
import ProfileDetails from './ProfileDetails';
import ProfileDetailsForm from './ProfileDetailsForm';



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
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>

      <Grid container spacing={2}>
        <Grid item lg={3} xs={12} sm={12} md={3}>
          <ProfilePreview imgSrc={file} />
        </Grid>
        <Grid item lg={9} xs={12} sm={12} md={9}>
          <ProfileDetails>
            <ImgUpload onChange={handleChange} />
            <ProfileDetailsForm />
          </ProfileDetails>
        </Grid>
      </Grid>
    </>
  );
}