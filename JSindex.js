let sectionToDisplay = document.querySelector("#sectionToDisplay");
let greeting = document.querySelector('input');
let button = document.querySelector(".submit");
let subjectindex = document.querySelector('#subject');
let message = document.querySelector('textarea');
let form = document.querySelector('#formToHide')
let imageDiv = document.querySelector('.image');

button.addEventListener('click', addGreetingtosection);
subjectindex.addEventListener('click', resetSelectElement);
button.addEventListener('click', showCard);





function addGreetingtosection() {


    if (subjectindex.selectedIndex === 1) {
        sectionToDisplay.textContent = (`${greeting.value} Birthday ${message.value}`);
        fetch("https://api.unsplash.com/search/photos?query=birthday&client_id=5DmZOfA6_5xboRSxVSe-lh6GIytQ1I1OxBGzf_SX_z4").then(function (response) {
            response.json().then(function (json) {

                //console.log(json.results[1].urls.regular);
                let imageURL = json.results[1].urls.regular;
                console.log(imageURL);
                let imageElement = document.createElement('img');
                imageElement.src = imageURL;
                imageDiv.append(imageElement);
            })

                .catch(error => {
                    Console.log(error)
                })
        })

        //document.body.style.backgroundImage = "url(imageURL)";



    }
    else if (subjectindex.selectedIndex === 2) {
        sectionToDisplay.textContent = (`${greeting.value} Christmas ${message.value}`);
        fetch("https://api.unsplash.com/search/photos?query=christmas&client_id=5DmZOfA6_5xboRSxVSe-lh6GIytQ1I1OxBGzf_SX_z4").then(function (response) {
            response.json().then(function (json) {

                //console.log(json.results[1].urls.regular);
                let imageURL = json.results[1].urls.regular;
                console.log(imageURL);
                let imageElement = document.createElement('img');
                imageElement.src = imageURL;
                imageDiv.append(imageElement);
            })

                .catch(error => {
                    Console.log(error)
                })
        })
    }
    else if (subjectindex.selectedIndex === 3) {
        sectionToDisplay.textContent = (`${greeting.value} Halloween ${message.value}`);
        fetch("https://api.unsplash.com/search/photos?query=halloween&client_id=5DmZOfA6_5xboRSxVSe-lh6GIytQ1I1OxBGzf_SX_z4").then(function (response) {
            response.json().then(function (json) {

                //console.log(json.results[1].urls.regular);
                let imageURL = json.results[1].urls.regular;
                console.log(imageURL);
                let imageElement = document.createElement('img');
                imageElement.src = imageURL;
                imageDiv.append(imageElement);
            })

                .catch(error => {
                    Console.log(error)
                })
        })
    }


}

function resetSelectElement() {
    if (subjectindex.selectedIndex === 0) {
        subjectindex.selectedIndex = 0;
    }
}

function showCard() {
    sectionToDisplay.style.display = 'block';
    form.style.display = 'none';
}




//window.addEventListener('load', loadImg);

//function loadImg() {
//    const url = 'https://api.unsplash.com/photos/?client_id=5DmZOfA6_5xboRSxVSe-lh6GIytQ1I1OxBGzf_SX_z4';
  //const url = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
////  const imageDiv = document.querySelector('.image');
 //   fetch(url)
//        .then(response => {
 //           return response.json();
 //       })
//        .then(data => {
 //              
//                for (let i = 0; i < data.results.length; i++) {

//                    /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
 //                   if (data.results[i].id == "6VhPY27jdps") {
 //                       let imageElement = document.createElement('img');
//                        imageElement.src = data.results[i].urls.thumb;
//                        imageDiv.append(imageElement);
////                    }
//                }
//            });
//}