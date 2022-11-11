import { Avatar, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


function DocumentOverView() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <Grid container spacing={2}>
            <Grid item lg={6}>
                <Paper elevation={3}
                    sx={{
                        display: "flex",
                        flexFlow: "column",
                        height: "100%",
                    }}>
                    <Grid item lg={12} sm={12} md={12} xs={12} bgcolor="#36c5d4" textAlign={"center"} >
                        <Typography variant='h2' sx={{ position: "relative", top: "50%", start: "50" }}>
                            CV
                        </Typography>
                    </Grid>
                    {/* <Grid item lg={12} sm={12} md={12} xs={12} pt={3} textAlign="center">
                        <hr />
                    </Grid> */}
                    <Grid item>
                        <Grid container p={3} spacing={3}>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                <Typography variant="h5">
                                    Approver Name:
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                {/* <Avatar sx={{ backgroundColor: "deepOrange" }}>JD</Avatar> */}
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h5" textAlign="right">
                                        <Avatar sx={{ backgroundColor: "deepOrange" }}>JD</Avatar>John Doe
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                <Typography variant="h5">
                                    Document Status:
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                {/* <Avatar sx={{ backgroundColor: "deepOrange" }}>JD</Avatar> */}
                                <Typography variant="h5" sx={{ display: "inline-block" }} textAlign="right">
                                    Verified
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                <Typography variant="h5">
                                    Document Issue Date:
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                {/* <Avatar sx={{ backgroundColor: "deepOrange" }}>JD</Avatar> */}
                                <Typography variant="h5" sx={{ display: "inline-block" }} textAlign="right">
                                    19-11-2021
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>
                                <Typography variant="h5">
                                    Document Expiry Date:
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={6} md={6} xs={6}>

                                <Typography variant="h5" sx={{ display: "inline-block" }} textAlign="right">
                                    18-11-2022
                                </Typography>
                            </Grid>
                            <Grid container >

                                <Grid item lg={4} p={3} textAlign={"center"}>
                                    <Button color="success" variant="contained" disabled>Approve</Button>
                                </Grid>
                                <Grid item lg={4} p={3} textAlign={"center"}>
                                    <Button sx={{ backgroundColor: "#eea319" }} variant="contained">Pending</Button>
                                </Grid>
                                <Grid item lg={4} p={3} textAlign={"center"}>
                                    <Button sx={{ backgroundColor: "red" }} variant="contained">Reject</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Paper elevation={3}
                    sx={{
                        display: "flex",
                        flexFlow: "column",
                        height: "85vh",
                    }}>
                    <div>
                        <Document file="/PDF.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default DocumentOverView
