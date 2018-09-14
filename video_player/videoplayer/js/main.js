// JavaScript Document

console.log("Linked up");

//Variables

var vid = document.getElementById("trailer");

var fillBar = document.getElementById("fillBar");

var currentTime = document.getElementById("currentTime");

var volumeSlider = document.getElementById("volume");



//Functions

function playOrPause(){
    
	
    if(vid.paused){
        vid.play();
        $("#playButton").attr("src","Pause.png");
    }
    else{
        vid.pause();
        $("#playButton").attr("src","Play.png");
    }
}

function convertTime(seconds)
        {
			"use strict";
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;
            
            totalTime(Math.round(vid.duration));
        }
        
        function totalTime(seconds)
        {	
			"use strict";
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec;
        }

function forwardRewind(param) {
var trailer = document.getElementById("trailer");
trailer.currentTime += param;
}


var volume = document.getElementById("vol-control");

volume.addEventListener("input", function(){
  vid.volume = this.value / 100;
});

function myFunction(imgs) {
	
	
	var expandImg = document.getElementById("expand");
	
	expandImg.src = imgs.src;
	
	expandImg.parentElement.style.display = "block";
}


//Event Listeners

vid.addEventListener('timeupdate',function(){
	
	
    var position = vid.currentTime / vid.duration;  
	      
    fillBar.style.width = position * 100 +'%';
    
    convertTime(Math.round(vid.currentTime));  
    
    if(vid.ended){
        $("#playBtn").attr("src","Play.png");
    }
});

