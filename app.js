// query selector
let input = document.querySelector(".input");
let searchBtn = document.querySelector(".search");
let container = document.querySelector(".shows-container");
let mainScreen = document.querySelector("#main");
let detilsPageBtn = document.querySelector(".showDetail");

mainScreen.classList.add("inactive");

searchBtn.addEventListener("click", () => {
  container.innerHTML = "";
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let showData = data[i]

        let showBox = `<div class='show-box flex'>
      <img src='${showData["show"]["image"]["medium"]}'>
      <h1 class='title'><span>Title : </span>${showData["show"]["name"]}</h1>
      <p class='date'><span>Date : </span>${showData["show"]["premiered"]}</p>
      <p class='lang'><span>Language : </span>${showData["show"]["language"]}</p>
      <a href='./showDetails.html' class='showDetail' id=${showData["show"]['id']}>Show Details</a>
      </div>`;

        container.innerHTML += showBox;
        mainScreen.classList.remove("inactive");
        mainScreen.classList.add("backColor");


        container.addEventListener('click', (e) => {
          if(e.target.id == showData['show']['id']){
            sessionStorage.setItem('showData', JSON.stringify(showData))
          }
        })
      }
    })
});
