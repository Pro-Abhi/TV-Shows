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

    let basicDetail = `<div class="b-details flex">
      <div class='img'>
        <img src="${data.image.medium}" />
      </div>
      <div class="right">
        <h1>${data.name}</h1>
        <p>Genres : ${data.genres}</p>
        <p>Language : ${data.language}</p> 
        <p>Status : ${data.status}</p> 
      </div>
    </div>
    <div class='summary'>${data.summary}</div>`;

    basicDetails.innerHTML += basicDetail;
  });

fetch(`https://api.tvmaze.com/shows/${tranferData.show.id}/seasons`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let seasonDetail = `<div class='s-details flex'>
          <div>
            <p class='season'>season:${data[i].number}</p>
            <img src='${data[i].image.medium}'>
          </div>
            <div class='summary'>
              ${data[i].summary}
            </div>
        </div>`;

        if (data[i].summary == null || data[i].image == null) {
          seasonDetails.removeChild()
        }

      seasonDetails.innerHTML += seasonDetail;
      console.log(seasonDetails.length);
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

