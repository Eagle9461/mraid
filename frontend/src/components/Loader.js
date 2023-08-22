import React, { useEffect, useState } from "react";
import {createPortal} from "react-dom";

export const PercentageLoader = () => {
  useEffect(() => {
    const loader = document.getElementById('loader');
    if(!loader) return;
    const loaderContent = document.createElement('div');
    loader.appendChild(loaderContent);
    startPercentageLoader();
    return () => {
      loader.removeChild(loaderContent);
    };

  }, []);

  const staticLoader = document.getElementById("loader");

    const loaderContainer = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(245, 242, 220, 0.01)',
    };
    const wrapper = {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: '9',
        };
    const loader = {
        position: 'fixed',
        width: '200px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '999',
    }
  

  if(typeof(window)==="object" && staticLoader!=null)
    return createPortal(
      <div style={loaderContainer}>
        <div style={wrapper}>
          <div style={loader}>
            <canvas id="spinner" width="300" height="300"/>
            {/* <Image src={loaderImg} alt="Loading..." /> */}
          </div>
        </div>
      </div>,
      staticLoader
    );
  else return <></>;
};
const startPercentageLoader = () => {
  let preSpinner = document.getElementById("spinner");
  if(preSpinner == null) return;
  let spinner = convertToCanvas(preSpinner);
  let ctx = spinner.getContext("2d");
	let width = spinner.width;
	let height = spinner.height;
	let degrees = 0;
	let new_degrees = 0;
	let difference = 0;
	let color = "turquoise";
	let bgcolor = "#222";
	let text;
	let animation_loop, redraw_loop;
	
	function init() {
    if(ctx==null)return;
		ctx.clearRect(0, 0, width, height);
    
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 30;
		ctx.arc(width/2, width/2, 100, 0, Math.PI*2, false);
		ctx.stroke();
		let radians = degrees * Math.PI / 180;
    
		ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 30;
    ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
    ctx.stroke();
    ctx.fillStyle = color;
		ctx.font = "50px arial";
		text = Math.floor(degrees/360*100) + "%";
		let text_width = ctx.measureText(text).width;
    ctx.fillText(text, width/2 - text_width/2, height/2 + 15);
	}
	
	function draw() {
		if (typeof animation_loop != undefined) clearInterval(animation_loop);
		new_degrees = 360;
		difference = new_degrees - degrees;
		animation_loop = setInterval(animate_to, 600/difference);
	}
  
	function animate_to() {
		if(degrees == new_degrees) 
			clearInterval(animation_loop);
		else if(degrees < new_degrees)
			degrees++;
		else
			degrees--;
		init();
	}
	
	draw();

}
function convertToCanvas(element) {
  // Check if the element is already an HTMLCanvasElement
  if (element instanceof HTMLCanvasElement) {
    return element;
  }
  
  // Create a new HTMLCanvasElement
  const canvas = document.createElement('canvas');
  
  // Set the canvas dimensions to match the element's dimensions
  canvas.width = element.clientWidth;
  canvas.height = element.clientHeight;
  
  // Get the canvas 2D context
  const context = canvas.getContext('2d');
  
  // Draw the element's content on the canvas
  if(element != null){
    context?.drawImage(
      element,
      0,
      0,
      element.clientWidth,
      element.clientHeight
    );
  }

  return canvas;
}

export default PercentageLoader;