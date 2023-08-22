
const deviceKey = "devices";
const getId = (device) => {
  let deviceId = device.deviceName==undefined ? device.osVersion : device.deviceName + device.osVersion;
  return deviceId;
}
export const addDevice = (device) => {
    let info = localStorage.getItem(deviceKey)||[];
    let devices = JSON.parse(info);
    if(devices)
    {
      let x = devices.push(device);
      localStorage.setItem(deviceKey,JSON.stringify(devices));
    }
    else{
      let x = [device];
      localStorage.setItem(deviceKey,JSON.stringify(x));
    }    
}
export const removeDevice = (device) => {
  let existingArray = JSON.parse(localStorage.getItem(deviceKey)) || [];

  // Step 2: Modify the array (remove a specific item)
  
  const updatedArray = existingArray.filter(item => {
    let itemId = getId(item);
    let deviceId = getId(device);
    return itemId !== deviceId;
  });

  // Step 3: Update the array in localStorage
  localStorage.setItem(deviceKey, JSON.stringify(updatedArray));
}
