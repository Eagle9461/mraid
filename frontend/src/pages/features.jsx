import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import { DeviceGroupBox } from "../components/DeviceGroupBox";
import { InputPosition } from "../components/InputPosition";
import axios from 'axios';

import { Header } from "./Header";
import { OsGroupBox } from "../components/OsGroupBox";

const dataurl = process.env.REACT_APP_BACKEND_URL+'deviceinfo';
const posturl = process.env.REACT_APP_BACKEND_URL+'event';

export const Features = (props) => {
  const navigate = useNavigate();
  const [DeviceData, setDeviceData] = useState({});
  const sendInfo = async (pos, devices, json, browser) =>{
    let res = await axios.post(posturl, {pos:pos, devices:devices, json:json, browser:browser});
    if(res.data.isSucceed=="OK") navigate('result');
  }
  useEffect(async () => {
    const { data } = await axios.get(dataurl);
    setDeviceData(data);
  }, []);
 
  return (<>
    <Header/>
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Devices</h2>
        </div>
        <InputPosition sendHandle={sendInfo}/>
        <div className="row">
          <div className="col-md-12">
            <h3>Android</h3>
            <DeviceGroupBox data={DeviceData.Android}/>
            <h3>iOS</h3>
            <DeviceGroupBox data={DeviceData.iOs}/>
            <h3>Laptop</h3>
            <OsGroupBox data={[{name:"Windows", data:DeviceData.Windows},{name:"Mac", data:DeviceData.Mac}]}/>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
