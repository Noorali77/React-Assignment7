import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <div>
        <TextField
          id="standard-search"
          label={props.label}
          type={props.type}
          variant="standard"
          onChange={props.change}
        />
     
      </div>
    </Box>
  );
}
