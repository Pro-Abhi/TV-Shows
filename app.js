// query selector
let input = document.querySelector(".input");
let searchBtn = document.querySelector(".search");
let container = document.querySelector(".shows-container");
let detilsPage = document.querySelector('.showDetail')
let mainScreen = document.querySelector('#main')

mainScreen.classList.add('inactive')

searchBtn.addEventListener("click", () => {
  container.innerHTML = "";
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let showData = data[i]["show"];
        // console.log(showData);

        let showBox = `<div class='show-box flex'>
      <img src='${showData["image"]["medium"]}'>
      <h1 class='title'><span>Title : </span>${showData["name"]}</h1>
      <p class='date'><span>Date : </span>${showData["premiered"]}</p>
      <p class='lang'><span>Language : </span>${showData["language"]}</p>
      <button type='submit' class='showDetail' onclick='showDetails(id = ${showData['id']})'>Show Details</button>
      </div>`;



        container.innerHTML += showBox;
        mainScreen.classList.remove('inactive')
        mainScreen.classList.add('backColor')
      }
    })
    .catch((err) => alert("Please check name..."));
});



let detailsBtn = document.querySelector('.showDetail')
let showDetailScreen = document.querySelector('.shows-details')

showDetailScreen.classList.add('inactive')

function showDetails(){
  showDetailScreen.innerHTML = ""

  fetch(`https://api.tvmaze.com/shows/id?embed[]=seasons&embed[]=cast`)
  .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })


  container.classList.add('inactive')
  showDetailScreen.classList.remove('inactive')
  mainScreen.classList.add('backColor')
}