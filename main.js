const arena = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');

class Player {
  constructor(player, nickName = '', hp = 100, img = '', weapon = []) {
    this.player = player;
    this.nickName = nickName;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.nickName} fights`);
  }
}

const player1 = new Player(
  1,
  'Subzero',
  100,
  'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  ['bow', 'axe'],
);
const player2 = new Player(
  2,
  'Scorpion',
  100,
  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  ['sword'],
);

const createElement = (el, className) => {
  const $el = document.createElement(el);
  $el.classList.add(className);
  return $el;
};

const createPlayer = (name, palyer) => {
  const { nickName, hp, img } = palyer;
  const playerWrapper = createElement('div', name);
  const progressBar = createElement('div', 'progressbar');
  playerWrapper.append(progressBar);
  const life = createElement('div', 'life');
  life.style.width = `${hp}%`;
  progressBar.append(life);
  const fighterName = createElement('div', 'name');
  fighterName.textContent = nickName;
  progressBar.append(fighterName);
  const character = createElement('div', 'character');
  character.classList.add('character');
  playerWrapper.append(character);
  const picture = document.createElement('img');
  picture.src = img;
  character.append(picture);
  arena.append(playerWrapper);
};
createPlayer('player1', player1);
createPlayer('player2', player2);
const radomDamageValue = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const nameWinnerHandler = player => {
  const winnerNameHandler = createElement('div', 'loseTitle');
  winnerNameHandler.innerHTML = `${player.nickName} win`;
  return winnerNameHandler;
};

const damageHandler = player => {
  const playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= radomDamageValue(1, 20);
  if (player.hp > 0) {
    playerLife.style.width = `${player.hp}%`;
    return;
  }
  if (player.player === 1 && player.hp <= 0) {
    arena.appendChild(nameWinnerHandler(player2));
  }
  if (player.player === 2 && player.hp <= 0) {
    arena.append(nameWinnerHandler(player1));
  }
  randomBtn.disabled = true;
  playerLife.style.width = 0;
};

randomBtn.addEventListener('click', () => {
  damageHandler(player1);
  damageHandler(player2);
});
