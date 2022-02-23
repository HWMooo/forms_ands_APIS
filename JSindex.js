let sectionToDisplay = document.querySelector("#sectionToDisplay");
let greeting = document.querySelector('input');
let button = document.querySelector(".submit");

button.addEventListener('click', addGreetingtosection);

function addGreetingtosection(event){
    event.preventDefault();
    sectionToDisplay.textContent = greeting.value;
    
    

}