import { Typography } from '@mui/material'
import React from 'react'

function ProfileDetails(props) {
    return (
        
            <form action="/action_page.php">
                <fieldset style={{borderColor:"#296a19", padding: "20px" , marginTop:"20px"}}>
                    <legend><Typography variant="h4" fontWeight={"bold"} sx={{color:"#677861"}}>{props.name}</Typography></legend>
                    {props.children}
                </fieldset>
            </form>
    )
}

export default ProfileDetails
