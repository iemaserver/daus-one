import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";



export default function ProfileDetailsForm() {
  const [gender, setGender]= useState("");
  const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    }
  ];
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Stack spacing={3} mt={3}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Defence Organization Number"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item lg={6}>
        <TextField fullWidth
          id="outlined-select-currency"
          select
          label="Select"
          value={gender}
          onChange={handleChange}
          helperText="Please select your Gender"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid >

        <Grid item lg={6}>
        <TextField fullWidth
          id="outlined-select-currency"
          select
          value={gender}
          label="Select"
          onChange={handleChange}
          helperText="Please select your Gender"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item lg={6}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Gender"
            defaultValue="Hello World"
          />
        </Grid >
      </Grid>
    </Stack>
  );
}
