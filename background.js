const body = document.querySelector('body');

const IMG_NUMBER = 5;

function genRandom(){
    const num = Math.ceil(Math.random() * IMG_NUMBER);
    return num
}

function paintBGImage(imgNumber){
    const image = new Image();
    image.src = `images/image${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const randNum = genRandom();
    paintBGImage(randNum);
}

init();