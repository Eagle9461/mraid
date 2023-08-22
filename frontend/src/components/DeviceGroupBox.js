import {styled} from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { DeviceSwitch } from './DeviceSwitch';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Boxheader = ({children}) => {
    const myStyle = {
      backgroundColor: "#bbb",
      margin: "-4px -4px 4px -4px",
      fontSize: "16px",
      textAlign: "left",
      padding: "4px 8px",
      color: "white",
    };
    return(
      <div style={myStyle}>{children}</div>
    )
  };

export const Linedevice = ({children, device}) => {
const lineStyle = { 
};
const textStyle = {
    fontSize: "14px",
    padding: "12px 4px",
    textAlign: "left",
};
const switchStyle = {
    float:"right"
};
return(
    <div style={lineStyle} className="">
      <span className="col-md-9" style={textStyle}>{children}</span>
      <span className="col-md-3" style={switchStyle}>
        <DeviceSwitch sx={{ m: 1 }}  device={device} />
      </span>
    </div>
)
}

export const DeviceGroupBox = (props) => {
    return (
        <Box sx={{ }}>
          {
            props.data &&
            <Masonry columns={3} spacing={2}>
              { 
              props.data.map((group, index) => (
                <Item key={index} sx={{  }}>
                  <Boxheader>{group.name}</Boxheader>
                    {
                      group.data
                      ? group.data.map((d, i) => (
                          <Linedevice key={i} device={d}>{d.deviceName}  {d.osVersion}</Linedevice>
                          ))
                      : "Loading..."
                    }
                </Item>
              ))
              }
            </Masonry>
          }
      </Box>
    )
}