const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let sec = 0;
let msec = 0;
let min = 0;

let leadingMsec = 0;
let leadingSec = 0;
let leadingMin = 0;

let timerInterval = null;
let timerStatus = "stopped";


function stopWatch(){
    msec ++;
    if(msec/99 === 1){
        msec = 0;
        sec ++;
        if(sec/60 === 1 ){
            sec = 0;
            min ++;
        }
    }
    if(msec < 10){
        leadingMsec = "0 "+ msec.toString();
    }else{
        leadingMsec = msec;
    }

    if(sec < 10){
        leadingSec = "0" + sec.toString();
    }else{
        leadingSec = sec;
    }
    if(min < 10){
        leadingMin = "0" + min.toString();
    }else{
        leadingMin = min;
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingMin + ':' + leadingSec + ':' + leadingMsec; 

}
startStopBtn.addEventListener('click',function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,10);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-pause"></i>';
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-play" ></i>';
         timerStatus = "stopped"
    }
})


resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa fa-play" ></i>';
    timerStatus = "stopped"
    sec=0;
    msec =0;
    min=0;

    document.getElementById('timer').innerHTML = "00:00:00"
})