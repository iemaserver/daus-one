import { Paper, Typography } from '@mui/material'
import React from 'react'

function ProfileDetails(props) {
    return (
        <Paper elevation={3} sx={{padding:"20px", height:"100%"}}>
            <form action="/action_page.php">
                <fieldset style={{ padding: "20px" }}>
                    <legend><Typography variant="h4" fontWeight={"bold"}>Profile Details</Typography></legend>
                    {props.children}
                </fieldset>
            </form>
        </Paper>
    )
}

export default ProfileDetails
