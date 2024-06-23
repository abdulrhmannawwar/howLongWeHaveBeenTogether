function updateTime(){
    let OurDate = new Date('Apr , 4 , 24');
    let date = new Date();
    let days = (date - OurDate) / 1000 / 60 / 60 / 24;
    let hours = (days - Math.floor(days))* 24; 
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;
    days = Math.floor(days);
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);
    let numDays = document.getElementById('days');
    let numHours = document.getElementById('hours');
    let numMinutes = document.getElementById('minutes');
    let numSeconds = document.getElementById('seconds');
    numDays.innerHTML = days;
    numHours.innerHTML = hours;
    numMinutes.innerHTML = minutes;
    numSeconds.innerHTML = seconds;
}
setInterval(updateTime,1000);
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function showHearts(){
    let hearts = ['❤️','💙','💜'];
    let w = window.innerWidth;
    setInterval(()=>{
        let div = document.createElement('div');
        let randIdx = Math.floor(Math.random() * hearts.length);
        div.innerHTML = hearts[randIdx];
        div.className = 'heart';
        div.style.top = `${randomNumber(0,100)}px`;
        div.style.left = `${randomNumber(20,w-60)}px`;
        document.body.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000)
    },100)
}
let msg = document.querySelector('.msg');
let dt = new Date();
if(dt.getDate()==4){
    msg.style.display = 'block';
    showHearts();
} else {
    msg.style.display = 'none'
}
