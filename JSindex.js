let sectionToDisplay = document.querySelector("#sectionToDisplay");
let greeting = document.querySelector('input');
let button = document.querySelector(".submit");
let subjectindex = document.querySelector('#subject');
let message = document.querySelector('textarea');
let form = document.querySelector('#formToHide')

button.addEventListener('click', addGreetingtosection);
subjectindex.addEventListener('click', resetSelectElement);
button.addEventListener('click', showCard);
function addGreetingtosection(){
    
    
    if(subjectindex.selectedIndex === 1){
        sectionToDisplay.textContent = (`${greeting.value} Birthday ${message.value}`);
    }
    else if(subjectindex.selectedIndex === 2){
        sectionToDisplay.textContent = (`${greeting.value} Christmas ${message.value}`);
    }
    else if(subjectindex.selectedIndex === 3){
        sectionToDisplay.textContent = (`${greeting.value} Halloween ${message.value}`);
    }
    

}

function resetSelectElement() {
    if(subjectindex.selectedIndex === 0){
    subjectindex.selectedIndex = 0;
    }
}

function showCard(){
    sectionToDisplay.style.display = 'block';
    form.style.display = 'none';
}


fetch("https://api.unsplash.com/").then(function(response){
    response.json().then(function(json){
      console.log(json.public_repos)
    })
  
  .catch(error => {
  Console.log(error)})
  })
     