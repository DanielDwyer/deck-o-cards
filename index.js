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
  { number: 10, name: 'king' }
];

const randomizedDeck = () => {
  const deck = [];

  // Create all 52 unique cards
  for (const value of values) {
    for (const type of types) {
      deck.push({
        number: value.number,
        name: value.name,
        type: type
      });
    }
  }

  // Shuffle using Fisher-Yates algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

module.exports = randomizedDeck;
