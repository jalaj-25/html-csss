console.log("Welcome to spotify");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Khwaab",                filepath: "1.mp3", coverPath: "1.jpg"},
    {songName: "AKHA NU",               filepath: "2.mp3", coverPath: "2.jpg"},
    {songName: "TUM KYU",               filepath: "3.mp3", coverPath: "3.jpg"},
    {songName: "DEWAANE",               filepath: "4.mp3", coverPath: "4.jpg"},
    {songName: "KHARIYAT",              filepath: "5.mp3", coverPath: "5.jpg"},
    {songName: "BEKHAYALI",             filepath: "6.mp3", coverPath: "6.jpg"},
    {songName: "SAJDE KIYE HEIN LAKHO", filepath: "7.mp3", coverPath: "7.jpg"},
    {songName: "HUM BHI AGAR",          filepath: "8.mp3", coverPath: "8.jpg"},
    {songName: "SULTAN",                filepath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Salam-e-ishq",          filepath: "10.mp3", coverPath: "10.jpg"}
]
 
songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//handle play pause play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<= 0)  {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=> {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=> {
    if(songIndex > 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previsious').addEventListener('click',()=> {
    if(songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})