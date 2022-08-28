// query selector
let input = document.querySelector('.input')
let submitBtn = document.querySelector('.search')


submitBtn.addEventListener('click', () => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
  //fetching api data
  .then((response) => response.json()) //text --> json
  .then((data) =>{}
})