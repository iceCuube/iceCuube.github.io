var changeVol = function(audioObj, vol)
{
	audioObj.volume = vol;
	return audioObj;
};

var i = 0;
var index = 0;
var prevIndex = -1;
var hideTiming = null;

var arrAudio = [];
for(var j=0;j<13;j++)
	arrAudio.push(changeVol(new Audio("media/sounds/hutao_jp_" + (j+1) + ".ogg"), 0.2));

window.onload = (e) => {
	var button = document.getElementById("bottom_left_corner_button");
	var img = document.getElementById("bottom_left_corner_image");
	var tag = document.getElementById("bottom_left_corner_link");

	button.onclick = function()
	{
		//arrAudio[i].play();
		do
		{
			index = Math.floor(Math.random() * arrAudio.length);
		} while(index == prevIndex)
		
		arrAudio[index].play();
		prevIndex = index;
		
		if(i >= arrAudio.length-1)
			i = 0;
		else
			i++;
	}

	button.onmousedown = function()
	{
		img.style.transitionDuration = "0.15s";
		img.style.width = "227px";
		img.style.height = "181px";	
	}

	button.onmouseup = function()
	{
		img.style.transitionDuration = "0.15s";
		img.style.width = "239px";
		img.style.height = "190px";
	}

	button.onmouseover = function()
	{
		img.style.transitionDuration = "0.4s";
		img.style.width = "239px";
		img.style.height = "190px";

		tag.style.bottom = "-5px";
	
		if(hideTiming != null)
		{
			window.clearInterval(hideTiming); // clear the timer and reset it later
		}
	}

	button.onmouseleave = function()
	{
		img.style.transitionDuration = "0.4s";
		img.style.width = "215px";
		img.style.height = "171px";

			// start a timer, once it ends, hide the tag
		hideTiming = window.setInterval(function()
		{
			tag.style.bottom = "-60px";
			window.clearInterval(this);
		}, 4000);
	}
};