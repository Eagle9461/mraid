import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const InputPosition = ({sendHandle}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [browser, setBrowser] = useState('Google Chrome');
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
    console.log(position, dInfo, json, browser);
    sendHandle(position, dInfo, json, browser);
  }
  const handleChange = (e) => {
    setBrowser(e.target.value);
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
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Web Browser</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={browser}
          onChange={handleChange}
          autoWidth
          label="Web Browser"
        >
            <MenuItem value="Google Chrome">
              <em>Chrome Browser</em>
            </MenuItem>
            <MenuItem value="Firefox">Firefox</MenuItem>
            <MenuItem value="Opera">Opera</MenuItem>
            <MenuItem value="Safari">Safari</MenuItem>
            <MenuItem value="Microsoft Edge">Microsoft Edge</MenuItem>
            <MenuItem value="Maxthon">Maxthon</MenuItem>
            <MenuItem value="Vivaldi">Vivaldi</MenuItem>
            <MenuItem value="SlimBrowser">SlimBrowser</MenuItem>
            <MenuItem value="Brave">Brave</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={send} style={btnStyle} variant="contained" endIcon={<SendIcon />} >
        Send
      </Button>
    </Box>
  );
}
