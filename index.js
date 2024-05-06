function soundPlayer(keyCode) {
  if (!keyCode) return;
  const selector = `[data-key="${keyCode}"]`;
  let sound = document.querySelector(`audio${selector}`);
  addPlayClass(`div${selector}`);
  sound.play();
}

function addPlayClass(selector) {
  let key = document.querySelector(selector);
  if (!key.classList.contains("play")) {
    key.classList.add("play");
  }
}

function removePlayClass(selector) {
  let key = document.querySelector(selector);
  if (key.classList.contains("play")) {
    key.classList.remove("play");
  }
}

const soundKey = {
  d: 68,
  r: 82,
  f: 70,
  t: 84,
  g: 71,
  h: 72,
  u: 85,
  j: 74,
  i: 79,
  k: 75,
  o: 73,
  l: 76,
};

document.addEventListener("keydown", function (event) {
  event.repeat = false;
  soundPlayer(soundKey[event.key]);
});

document.addEventListener("keyup", function (event) {
  const selector = `div[data-key="${soundKey[event.key]}"]`;
  removePlayClass(selector);
});
