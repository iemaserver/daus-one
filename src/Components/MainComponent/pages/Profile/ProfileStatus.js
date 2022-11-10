import React from 'react';
import { Box, Grid, Tooltip, Typography } from '@mui/material';
import LinearProgress from '@mui/joy/LinearProgress';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Stack } from '@mui/system';


function ProfileStatus() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} md={6} sm={12} xs={12} mt={3}>
        <Typography variant='h5'>
          HR Documents
        </Typography>

        <LinearProgress determinate value={100} sx={{ color: "green",  backgroundColor: "lightgrey" }} /><label>100%</label>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} mt={3}>
        <Typography variant="h5">
          Documents Accepted/Rejected
        </Typography>
        <Stack direction="row" spacing={3} mt={1}>
          <Tooltip title="CV"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Right to work (Passport/Driving Licence)"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Professional registration - GMC"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Certificate of Completion of training (CCT)"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Indemnity"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Disclosure Barring Service (DBS)"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
        </Stack>
      </Grid>
      <Grid item mt={3} lg={6} md={6} sm={12} xs={12}>
        <Typography variant='h5'>
          Mandatory Training Documents
        </Typography>
        <LinearProgress determinate value={100-18/4} sx={{ color: "red", backgroundColor: "lightgrey" }} /><label>{Math.trunc(100-80/4) +"%"}</label>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} mt={3}>
        <Typography variant="h5">
          Documents Accepted/Rejected
        </Typography>
        <Stack direction="row" spacing={3} mt={1}>
          <Tooltip title="BLS, AED"><InsertDriveFileIcon sx={{ color: 'red' }} /></Tooltip>
          <Tooltip title="Anaphylaxis"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Chaperone awareness"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Conflict resolution"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Data security awareness"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Duty of candour"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
        </Stack>
        <Stack direction="row" spacing={3} mt={1}>
          <Tooltip title="Equality, diversity and human rights"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Fire safety"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="H&S"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="IPC"><InsertDriveFileIcon sx={{ color: 'red' }} /></Tooltip>
          <Tooltip title="Mental Capacity Act"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Deprivation of Liberty Standards"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
        </Stack>
        <Stack direction="row" spacing={3} mt={1}>
          <Tooltip title="Moving & handling"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Preventing radicalisation"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Safeguarding adults"><InsertDriveFileIcon sx={{ color: 'red' }} /></Tooltip>
          <Tooltip title="Safeguarding children"><InsertDriveFileIcon sx={{ color: 'red' }} /></Tooltip>
          <Tooltip title="Sepsis"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
          <Tooltip title="Whistleblowing"><InsertDriveFileIcon sx={{ color: 'seaGreen' }} /></Tooltip>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ProfileStatus



