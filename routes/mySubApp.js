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

'use strict'

/*!
 * Module dependencies
 */
const express = require('express')
const mySubAppCtrl = require('./mySubAppCtrl')

const mySubApp = express.Router()

mySubApp.get('/deviceinfo', mySubAppCtrl.getDeviceInfo)
mySubApp.get('/imgUrl', mySubAppCtrl.getImgUrl)
mySubApp.get('/resources', mySubAppCtrl.getResources)
mySubApp.put('/resources/:id', mySubAppCtrl.putResource)
mySubApp.post('/resources', mySubAppCtrl.postResource)
mySubApp.post('/event', mySubAppCtrl.handleEvent)
mySubApp.delete('/resources/:id', mySubAppCtrl.deleteResource)

module.exports = mySubApp
