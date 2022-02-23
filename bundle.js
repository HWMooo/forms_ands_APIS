(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
     
},{}]},{},[1]);
