let tranferData = JSON.parse(sessionStorage.getItem("showData"));
console.log(tranferData);

let mainScreen = document.querySelector("#main");
let basicDetails = document.querySelector(".basic-details");
let seasonDetails = document.querySelector(".season-details");
let castDetails = document.querySelector(".cast-details");

mainScreen.classList.add("backColor");

fetch(`https://api.tvmaze.com/shows/${tranferData.show.id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let basicDetail = `<div class='b-detail>
    <div class='details flex'>
      <div class='img'>
        <img src='${data.image.medium}'>
      </div>
      <div class='info'>
        <h1 class='title'>${data.name}</h1>
        <p class='genres'><span>Genres : </span>${data.genres}</p>
        <p class='status'><span>Status : </span>${data.status}</p>
      </div>
    </div>
    <div class='summary'>${data.summary}</div>
  </div>`;

    basicDetails.innerHTML += basicDetail;
  });

fetch(`https://api.tvmaze.com/shows/${tranferData.show.id}/seasons`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].summary == null) {
        data[i].summary = "";
      }
      if (data[i].image.medium == null) {
        data[i].image.medium = "---";
      }
      let seasonDetail = `<div class='s-details flex'>
          <div>
            <p>season:${data[i].number}</p>
            <img src='${data[i].image.medium}'>
          </div>
            ${data[i].summary}
        </div>`;

      seasonDetails.innerHTML += seasonDetail;
    }
  });

fetch(`https://api.tvmaze.com/shows/${tranferData.show.id}/cast`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let castDetail = `<div class='c-detail'>
        <img src='${data[i].person.image.medium}'>
        <h2><span>Name : </span>${data[i].person.name}</h2>
        <h2><span>Character Name : </span>${data[i].character.name}</h2>
      </div>`;

      castDetails.innerHTML += castDetail;
    }
  });
