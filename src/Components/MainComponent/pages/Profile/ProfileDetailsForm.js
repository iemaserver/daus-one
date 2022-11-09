import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';

export default function ProfileDetailsForm() {
    return (
        // <Box sx={{flexGrow:"1"}}>
        <Grid item mt={3} spacing={5}>
            <Grid lg={6} md={6} sm={12} xs={12}>
                <TextField fullWidth
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12}>
                <TextField fullWidth
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Grid>
        </Grid>
        // </Box>
    )
}