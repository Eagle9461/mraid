import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const InputPosition = ({sendHandle}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [json, setJson] = useState('');
  const myStyle = {
  }
  const btnStyle = {
    fontSize:"14px"
  }
  const posStyle = {
    fontSize:"14px"
  }
  const send = () => {
    let position = {
      x:x,
      y:y
    };
    let dInfo = localStorage.getItem("devices");
    // console.log(position, dInfo);
    sendHandle(position, dInfo, json);
  }
  return (
    <Box
    //   component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={myStyle}
    >
      {/* <TextField id="standard-basic" label="X" variant="standard" inputProps={{style:posStyle, onChange:(e)=>{setX(e.target.value)}}} />
      <TextField id="standard-basic" label="Y" variant="standard" inputProps={{style:posStyle, onChange:(e)=>{setY(e.target.value)}}} /> */}
      <TextField 
        style={{width:"80%"}}
        id="standard-basic" 
        multiline 
        label="JSON" 
        rows={12}
        variant="filled" 
        inputProps={{style:posStyle, onChange:(e)=>{setJson(e.target.value)}}} 
      /> 

      <Button onClick={send} style={btnStyle} variant="contained" endIcon={<SendIcon />} >
        Send
      </Button>
    </Box>
  );
}
