const clockContainer = document.querySelector('.js-clock');
    clockTitle = clockContainer.querySelector('.clock');

let date = null;

function init(){
    getTime();
    setInterval(getTime, 1000);
}

function addZero(x){
    return x < 10 ? `0${x}` : x;
}

function getTime(){
    date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    setTime(hour, min, sec);
}

function setTime(hour, min, sec){
    clockTitle.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
}

init();