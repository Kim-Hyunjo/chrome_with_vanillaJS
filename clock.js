const clockContainer = document.querySelector('.js-clock')
    clockTitle = clockContainer.querySelector('.clock')

function init(){
    getTime();
    setInterval(getTime, 1000);
}

function addZero(x){
    return x < 10 ? `0${x}` : x;
}

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    clockTitle.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
}

init();