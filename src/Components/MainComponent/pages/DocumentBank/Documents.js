import { Grid, Paper } from '@mui/material'
import React from 'react'

function Documents() {
  return (
    <Grid container spacing={2}>
        <Grid item lg={3} xs={12} sm={12} md={3} fullHeight>
          <Paper>Hi</Paper>
        </Grid>
        <Grid item lg={9} xs={12} sm={12} md={9}>
          <Paper>Hello</Paper>
        </Grid>
      </Grid>
  )
}

export default Documents
