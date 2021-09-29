import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    
      <Button onClick={props.click} variant="contained">{props.name}</Button>
  );
}
