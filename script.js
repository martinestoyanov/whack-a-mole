// mole.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png";
// startGame();

///vars///
let mole = document.createElement("img");
mole.classList.add("mole");
// let score = 0;
let runningState = false;
let loopId = 0;
let btn = document.getElementById("btn");

function btnClassToggle() {
  if (runningState) {
    btn.className = "stop-btn";
    btn.innerText = "Stop";
  } else {
    btn.className = "start-btn";
    btn.innerText = "Start";
  }
}

//setup
btnInit();

function btnInit() {
  btnClassToggle();
  btn.addEventListener("click", () => {
    btnCtrl();
  });
}

function btnCtrl() {
  if (runningState) {
    stopGame();
  } else {
    startGame();
  }
}

function startGame() {
  loopId = setInterval(gameLoop, 1500);
  runningState = true;
  btnClassToggle();
}

function stopGame() {
  clearInterval(loopId);
  runningState = false;
  btnClassToggle();
}

//basic game loop
function gameLoop() {
  let random1 = Math.ceil(Math.random() * 4);
  let random2 = Math.ceil(Math.random() * 4);
  let selector = `.row-${random1} .column-${random2}`;
  let cell = document.querySelector(selector);
  cell.append(mole);
  removeMole(cell);
}
function removeMole(cell) {
  setTimeout(() => {
    cell.removeChild(document.querySelector(".mole"));
  }, 1000);
}
