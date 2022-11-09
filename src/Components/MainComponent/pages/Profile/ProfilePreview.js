import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Box, Stack } from '@mui/system';

function ProfilePreview(props) {
  return (
    <Card sx={{ padding: "1%" }} elevation={3}>
        <CardMedia
        >{props.imgSrc?<img src={props.imgSrc} height="450px" width="100%" alt="Profile"/>:<Skeleton variant="rounded" width={"100%"} height={450} sx={{textAlign:"center", paddingTop:"225px"}}>Profile Image</Skeleton>}</CardMedia>
        <CardContent sx={{height:"100%"}}>
          <Typography mb={2} gutterBottom variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            Dr. Sunder Mathur
          </Typography>
          <Stack spacing={2}>
          <Box >
            <Typography variant="body6" color="text.secondary" sx={{ display: "block" }}>
              Date of Birth
            </Typography>
            <Typography variant="h6" >
              26-07-1998
            </Typography>
          </Box>
          <Box >
            <Typography variant="body6" color="text.secondary" sx={{ display: "block" }}>
              GMC Number
            </Typography>
            <Typography variant="h6" >
              65486485
            </Typography>
          </Box>
          <Box >
            <Typography variant="body6" color="text.secondary" sx={{ display: "block" }}>
              E-Mail Id
            </Typography>
            <Typography variant="h6" >
              sunder.mathur@example.com
            </Typography>
          </Box>
          <Box >
            <Typography variant="body6" color="text.secondary" sx={{ display: "block" }}>
              Contact
            </Typography>
            <Typography variant="h6" >
              0333 4581853
            </Typography>
          </Box>
          </Stack>
        </CardContent>
      </Card>
  )
}

export default ProfilePreview
