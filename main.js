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
  arena.insertAdjacentHTML(
    'beforeend',
    `<div class=${name}>
  <div class="progressbar">
      <div class="life"></div>
      <div class="name">${nickName}</div>
  </div>
  <div class="character">
      <img src=${img} />
  </div>
</div>`,
  );
  const life = document.querySelector(`.${name} div .life`);
  life.style.width = `${hp}%`;
};
createPlayer('player1', player1);
createPlayer('player2', player2);
