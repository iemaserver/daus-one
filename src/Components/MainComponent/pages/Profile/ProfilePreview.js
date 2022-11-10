import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';
import React from 'react';

export default function ProfilePreview() {
    return (
        <Card sx={{ height: "100%", paddingBottom: "0", marginBottom: "0" }}>
            <CardMedia image='/Images/Final/profileBg.jpg' component="img" width="100%" height="250px" alt="ProfileBG" sx={{opacity:"0.8"}}/>
            <CardMedia image='/Images/Profile/avatar6.jpg' component="img" alt='avatar' height="200" style={{ position: "relative", width: "200px", border: "3px solid white", borderRadius: "50%", marginTop: "-100px", margin: "-100px auto 0 auto" }} />

            <CardContent style={{ padding: "5%", width:"100%", opacity: "0.7", textAlign: "center", display: "inline-block", position: "relative" }}>
                <Typography variant="h5" fontWeight={"bold"} textAlign="center">Dr. Robet Johnes</Typography>
                <Stack spacing={3} mt={3} mb={0}>
                    <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                        <Typography variant='body4' fontWeight={"bold"}>Date of Birth</Typography>
                        <Typography variant="h6">26-01-1986</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body4' fontWeight={"bold"}>GMC Number</Typography>
                        <Typography variant="h6">895 3254</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body4'fontWeight={"bold"}>Email ID</Typography>
                        <Typography variant="h6">robert.johnes@nhs.com</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body4' fontWeight={"bold"}>Contact Number</Typography>
                        <Typography variant="h6">Sample Text</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>

    )
}


