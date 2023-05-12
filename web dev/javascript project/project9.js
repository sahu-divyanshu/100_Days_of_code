const content = document.querySelector(".content"),
playImage = content.querySelector("img"),
musicName = content.querySelector(".name");
musicArtist = content.querySelector(".artist"),
Audio = document.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),
prevBtn = content.querySelector("#prev"),
nextBtn = content.querySelector("#next"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector(".progress-details"),
repeatBtn = content.querySelector("#repeat"),
Shuffle = content.querySelector("#shuffle ");

let index = 3;
 
window.addEventListener("load",()=>{
    loadData(index);
});

function loadData(indexValue){
    musicName.innerHTML = songs[indexValue -1].name;
    musicArtist.innerHTML = songs[indexValue -1].artist;
    playImage.src = "images/" +songs[indexValue -1].img+".jpg";
    Audio.src = "music/"+songs[indexValue -1].audio+".m4a";
}
playBtn.addEventListener("click",()=>{
    const isMusicPaused = content.classList.contains("paused");
    if(isMusicPaused){
        pauseSong();
    }else{
        playSong();
    }
});

function playSong(){
    content.classList.add("paused");
    playBtnIcon.classList.add("fa-pause");
    playBtnIcon.classList.remove("fa-play");
    Audio.play();
}
function pauseSong(){
    content.classList.remove("paused");
    playBtnIcon.classList.add("fa-play");
    playBtnIcon.classList.remove("fa-pause");
    Audio.pause();
}

nextBtn.addEventListener("click",()=>{
    nextSong();
});
prevBtn.addEventListener("click",()=>{
    prevSong();
});

function nextSong(){
    index++;
    if(index > songs.length){
        index = 1;
    }else{
        index = index;
    }
    loadData(index);
    playSong();
}
function prevSong(){
    index--;
    if(index < 1){
        index = songs.length;
    }else{
        index = index;
    }
    loadData(index);
    playSong();
}
Audio.addEventListener("timeupdate",(e)=>{
    const initialTime = e.target.currentTime;
    const finalTime = e.target.duration;
    let barWidth = (initialTime/finalTime)*100;
    progressBar.style.width = barWidth+"%";

    progressDetails.addEventListener("click",(e)=>{
        let progressVal = progressDetails.clientWidth;
        let clickedOffsetX = e.offsetX;
        let musicDuration = Audio.duration;

        Audio.currentTime = (clickedOffsetX/progressVal)*musicDuration;
    });
    Audio.addEventListener("loadeddata",()=>{
        let finalTimeData = content.querySelector(".final");
         // Updating Final Duration
        let AudioDuration = Audio.duration;
        let finalMinutes = Math.floor(AudioDuration / 60);
        let finalSeconds = Math.floor(AudioDuration % 60);
    
        if(finalSeconds < 10){
            finalSeconds = "0" + finalSeconds;
        }
       
        finalTimeData.innerText = finalMinutes + ":" +finalSeconds;
    });
    // Update current duration
    let currentTimeData = content.querySelector(".current");
    let CurrentTime = Audio.currentTime;
    let currentMinutes = Math.floor(CurrentTime / 60);
    let currentSeconds = Math.floor(CurrentTime %60);

    if(currentSeconds < 10){
        currentSeconds = "0"+currentSeconds;
    }
    currentTimeData.innerText = currentMinutes+ ":" +currentSeconds; 

    // repeat button logic
    repeatBtn.addEventListener("click",()=>{
        Audio.currentTime = 0;
    })
    
});

Shuffle.addEventListener("click",()=>{
    var randIndex = Math.floor(Math.random() * songs.length) + 1 ;
    loadData(randIndex);
    playSong();
});
Audio.addEventListener("ended",()=>{
    index++;
    if(index >songs.length){
        index = 1;
    }
    loadData(index);
    playSong();
})