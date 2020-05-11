const types = ['❤️', '♠️', '♦️', '♣️'];
const values = [
  { number: 1, name: 'ace' },
  { number: 2, name: 'two' },
  { number: 3, name: 'three' },
  { number: 4, name: 'four' },
  { number: 5, name: 'five' },
  { number: 6, name: 'six' },
  { number: 7, name: 'seven' },
  { number: 8, name: 'eight' },
  { number: 9, name: 'nine' },
  { number: 10, name: 'ten' },
  { number: 10, name: 'jack' },
  { number: 10, name: 'queen' },
  { number: 10, name: 'king' },
];

const randomizedDeck = () => {
  let mySet = new Set();
  do {
    let card = Object.assign({}, values[Math.floor(Math.random() * values.length)]);
    card.type = types[Math.floor(Math.random() * types.length)];
    mySet.add(card); 
  } while (mySet.size < 52);
  if (mySet.size === 52) return mySet;
};

module.exports = randomizedDeck;
