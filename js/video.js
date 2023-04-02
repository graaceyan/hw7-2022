
let video = document.querySelector('#player1');

window.addEventListener("load", function() 
{
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
});
document.querySelector("#play").addEventListener("click", function()
{
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function()
{
	console.log("Pause Video");
	video.pause();
});

const slider = document.getElementById("slider");
const volumeDisplay = document.getElementById("volume");
video.volume = slider.value / 100;
volumeDisplay.textContent = slider.value + '%';
slider.oninput = function(){
	video.volume = slider.value / 100;
	volumeDisplay.textContent = slider.value + '%';
};

let slowdownCount = 0; //Number of times slowed down
let slowSpeed = 1;

document.querySelector("#slower").addEventListener('click', function()
{
	slowSpeed *= 0.9; //Decrease speed by 10%
	video.playbackRate = slowSpeed;
	console.log(`New speed: ${slowSpeed}`);
});

document.querySelector("#faster").addEventListener('click', function()
{
	slowSpeed /= 0.9; //Increase speed by 10%
	video.playbackRate = slowSpeed;
	console.log(`New speed: ${slowSpeed}`);
});

document.querySelector("#skip").addEventListener('click', function()
{
	const newTime = video.currentTime + 10;
	if (newTime >= video.duration)
	{
		video.currentTime = 0;
	}
	else 
	{
		video.currentTime = newTime;
	}
	console.log(`Current time: ${video.currentTime}`);
});

document.getElementById("mute").addEventListener("click", function()
{
	video.muted = !video.muted;

	if (video.muted)
	{
		mute.textContent = 'Unmute';
		console.log(`Mute`);
	}
	else
	{
		mute.textContent = 'Mute';
		console.log(`Unmute`);
	}
});


document.getElementById("vintage").addEventListener("click", function ()
{
	video.classList.add('oldSchool');
});

document.getElementById("orig").addEventListener("click", function()
{
	video.classList.remove('oldSchool');
});
