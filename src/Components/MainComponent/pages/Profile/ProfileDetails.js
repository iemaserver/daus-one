import { Typography } from '@mui/material'
import React from 'react'

function ProfileDetails(props) {
    return (
        
            <form action="/action_page.php">
                <fieldset style={{ padding: "20px" , marginTop:"20px"}}>
                    <legend><Typography variant="h4" fontWeight={"bold"}>{props.name}</Typography></legend>
                    {props.children}
                </fieldset>
            </form>
    )
}

export default ProfileDetails
