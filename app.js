let songsArray=[
    {songName:"Armadham",songPath:"songs/song1.mp3",coverPath:"cover1.webp"},
    {songName:"Illuminati",songPath:"songs/song2.mp3",coverPath:"cover2.jpg"},
    {songName:"Dard-e-Disco",songPath:"songs/song3.mp3",coverPath:"cover3.jpeg"},
    {songName:"Khalashi",songPath:"songs/song4.mp3",coverPath:"cover4.webp"},
    {songName:"Pasoori",songPath:"songs/song5.mp3",coverPath:"cover5.webp"}
]

let playButton=document.querySelector('#playButton');
let backButton=document.querySelector('#playButton');
let forButton=document.querySelector('#playButton');
let GIF=document.querySelector("#GIF");
let songNameShower=document.querySelector("#songNameShower");
let slideBar=document.querySelector("#slideBar");
let songContCover=document.querySelectorAll(".songContainer img");
let songContainer=document.querySelectorAll(".songContainer");
let i=0;
let audio = new Audio(songsArray[i].songPath);

// play pause logic:
playButton.addEventListener('click', function() {
    // play logic:
    if(audio.paused)
    {
        audio.play().then(() => {
            console.log('Playback started successfully');
        });
        audio.play().catch(error => {
            console.error('Error during playback:', error);
        });
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        GIF.style.visibility="visible";

    }
    // pause logic:
    else if(audio.played)
    {
        audio.pause()
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
        GIF.style.visibility="hidden";
    }
});

//forward logic:
document.querySelector("#forwardButton").addEventListener('click',()=>{
    i++;
    if(i>=songsArray.length){
        i=songsArray.length-1;
    };
    audio.src=songsArray[i].songPath;
    audio.play();
    songNameShower.innerText=songsArray[i].songName;
    }
);

//Backward logic:
document.querySelector("#backwardButton").addEventListener('click',()=>{
    --i;
    if(i<0){
        i=0;
    };
    audio.src=songsArray[i].songPath;
    audio.play();
    songNameShower.innerText=songsArray[i].songName;
    }
);

// slideBar logic:
audio.addEventListener("timeupdate",()=>{slideBar.value=parseInt(audio.currentTime/audio.duration *100)});
slideBar.addEventListener('input',()=>audio.currentTime=parseFloat(slideBar.value*audio.duration/100));





