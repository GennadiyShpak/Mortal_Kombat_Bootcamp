const arena = document.querySelector('.arenas');

class Player {
  constructor(nickName = '', hp = 100, img = '', weapon = []) {
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
  'Subzero',
  100,
  'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  ['bow', 'axe'],
);
const player2 = new Player(
  'Scorpion',
  90,
  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  ['sword'],
);

const createPlayer = (name, palyer) => {
  const { nickName, hp, img } = palyer;
  const playerWrapper = document.createElement('div');
  playerWrapper.classList.add(name);
  const progressBar = document.createElement('div');
  progressBar.classList.add('progressbar');
  playerWrapper.append(progressBar);
  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = `${hp}%`;
  progressBar.append(life);
  const fighterName = document.createElement('div');
  fighterName.classList.add('name');
  fighterName.textContent = nickName;
  progressBar.append(fighterName);
  const character = document.createElement('div');
  character.classList.add('character');
  playerWrapper.append(character);
  const picture = document.createElement('img');
  picture.src = img;
  character.append(picture);
  arena.append(playerWrapper);
};
createPlayer('player1', player1);
createPlayer('player2', player2);
