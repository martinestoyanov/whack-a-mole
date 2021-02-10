let mole = document.createElement("img");
mole.classList.add("mole");
let score = 0;
// mole.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png";

let game = setInterval(() => {
  let random1 = Math.ceil(Math.random() * 4);
  let random2 = Math.ceil(Math.random() * 4);
  let selector = `.row-${random1} .cell-${random2}`;

  let theDiv = document.querySelector(selector);
  theDiv.append(mole);
  setTimeout(() => {
    theDiv.removeChild(document.querySelector(".mole"));
  }, 1000);
}, 1500);
