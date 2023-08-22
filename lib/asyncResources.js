/*******************************************************************************
 * Copyright (c) 2016 Nicola Del Gobbo
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the license at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY
 * IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing
 * permissions and limitations under the License.
 *
 * Contributors - initial API implementation:
 * Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 ******************************************************************************/

'use strict';
const deviceinfo = require("../devices.json");


module.exports = {

    getDeviceInfo(){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(deviceinfo)
        }, 1000)
      })
    },
    handleEvent({pos, devices, json}){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            {isSucceed:"OK"}
          )
        }, 1000)
      })
    },
    sendImgUrl(){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(itemData)
        }, 1000)
      })
    },
    getAsyncResources() {
      return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                firstName: "Nick",
                lastName: "Naso"
              },
              {
                firstName: "Steve",
                lastName: "Jobs"
              },
              {
                firstName: "Ryan",
                lastName: "Dahl"
              }
            ])
          }, 1000)
      })
    },

    createAysncResource(resource) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            firstName: resource.firstName,
            lastName: resource.lastName
          })
        }, 1000)
      })
    },

    updateAsyncResource(resource) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            firstName: resource.firstName,
            lastName: resource.lastName
          })
        }, 1000)
      })
    },

    deleteAsyncResources(resource) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            firstName: resource.firstName,
            lastName: resource.lastName
          })
        }, 1000)
      })
    }

}
const itemData = [
  {
    img: 'http://localhost:5000/images/01-large.jpg',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
