const greetingForm = document.querySelector('.js-greeting') //'js-greeting'이라는 클래스 사용하는 첫번째 요소 반환
    greetingInput = greetingForm.querySelector('.js-greeting-input')
    greetingText = greetingForm.querySelector('.js-greeting-text')

function saveName(text){
    localStorage.setItem("UserName", text);
}

function handleSubmit(event){
    event.preventDefault();
    const currVal = greetingInput.value;
    saveName(currVal);
    setName(currVal);
}

function askForName(){
    greetingForm.classList.add("showing");
    greetingForm.addEventListener("submit", handleSubmit);
}

function getName(){
    const currUser = localStorage.getItem("UserName");
    if(currUser === null){
        askForName();
    } else{
        setName(currUser);
    }
}

function setInnerText(){
    hour = date.getHours();
    return hour < 12 ? 'Good morning' : hour < 19 ? 'Good afternoon' : 'Good evening'
}

function setName(name){
    greetingForm.classList.remove("showing");
    greetingText.classList.add("showing");
    text = setInnerText()
    greetingText.innerHTML = `${text}, ${name}`;
}

function init(){
    getName();
}

init();