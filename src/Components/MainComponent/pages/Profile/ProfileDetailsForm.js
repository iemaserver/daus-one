import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { Stack } from "@mui/system";

export default function ProfileDetailsForm() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    // <Box sx={{flexGrow:"1"}}>
    <Grid item mt={3} spacing={3}>
      <Stack spacing={3}>
        <Grid lg={5} md={6} sm={6} xs={6}>
          <TextField
            fullWidth
            required
            id="input-with-icon-textfield"
            label="Medical Defence Organisation Number"
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
        <Grid lg={5} md={6} sm={6} xs={6}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid lg={5} md={6} sm={12} xs={12}>
          <TextField
            fullWidth
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
      </Stack>
    </Grid>
    // </Box>
  );
}
