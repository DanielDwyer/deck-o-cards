# deck-o-cards

[![npm version](https://img.shields.io/npm/v/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dm/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dt/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dw/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![License](https://img.shields.io/npm/l/deck-o-cards.svg)](LICENSE)
[![Node Version](https://img.shields.io/node/v/deck-o-cards.svg)](https://nodejs.org/)

> A simple, efficient, and well-tested function that returns a randomized deck of 52 standard playing cards. Perfect for card games, casino simulations, or any application requiring a shuffled deck.

## Features

- **Fast & Efficient**: Uses Fisher-Yates shuffle algorithm for O(n) performance
- **Complete Deck**: Returns exactly 52 unique cards (4 suits × 13 ranks)
- **TypeScript Support**: Full TypeScript definitions included
- **Well Tested**: Comprehensive test suite with 100% coverage
- **Zero Dependencies**: Lightweight with no external dependencies
- **ES6+ Compatible**: Modern JavaScript with Node 12+ support

## Installation

```bash
npm install deck-o-cards
```

## Quick Start

```javascript
const randomizedDeck = require('deck-o-cards');

// Get a shuffled deck
const deck = randomizedDeck();

console.log(deck);
// Output: [
//   { number: 7, name: 'seven', type: '♠️' },
//   { number: 10, name: 'jack', type: '❤️' },
//   { number: 1, name: 'ace', type: '♦️' },
//   ... 49 more cards
// ]

// Use for games
const player1Hand = deck.slice(0, 5); // First 5 cards
const player2Hand = deck.slice(5, 10); // Next 5 cards
const remainder = deck.slice(10); // Rest of deck
```

## Usage Examples

### Basic Usage

```javascript
const randomizedDeck = require('deck-o-cards');
const deck = randomizedDeck();

// Each card has three properties:
deck.forEach((card) => {
  console.log(`${card.number} - ${card.name} - ${card.type}`);
});
```

### Blackjack Game

```javascript
const randomizedDeck = require('deck-o-cards');

class BlackjackGame {
  constructor() {
    this.deck = randomizedDeck();
    this.dealtCards = [];
  }

  dealCard() {
    return this.deck.pop(); // Deal from the end
  }

  getHandValue(cards) {
    return cards.reduce((sum, card) => sum + card.number, 0);
  }
}

const game = new BlackjackGame();
const playerHand = [game.dealCard(), game.dealCard()];
console.log(`Hand value: ${game.getHandValue(playerHand)}`);
```

### Poker Simulation

```javascript
const randomizedDeck = require('deck-o-cards');

function dealPokerHands() {
  const deck = randomizedDeck();
  const hands = [[], [], [], []]; // 4 players

  for (let i = 0; i < 5; i++) {
    for (let player = 0; player < 4; player++) {
      hands[player].push(deck.pop());
    }
  }

  return hands;
}

const hands = dealPokerHands();
console.log('Player 1:', hands[0]);
console.log('Player 2:', hands[1]);
// ... etc
```

### TypeScript Usage

```typescript
import randomizedDeck, { Card } from 'deck-o-cards';

const deck: Card[] = randomizedDeck();

function filterAces(cards: Card[]): Card[] {
  return cards.filter((card) => card.name === 'ace');
}

const aces = filterAces(deck);
console.log(`Found ${aces.length} aces`); // Always 4
```

### Card Properties

Each card in the returned array has the following structure:

```javascript
{
  number: number,  // Numeric value (1-10)
  name: string,    // Rank name ('ace', 'two', ..., 'king')
  type: string     // Suit emoji ('❤️', '♠️', '♦️', '♣️')
}
```

### Card Values

- **Ace**: `{ number: 1, name: 'ace' }`
- **Numbered cards** (2-9): `{ number: 2-9, name: 'two'...'nine' }`
- **Ten**: `{ number: 10, name: 'ten' }`
- **Jack**: `{ number: 10, name: 'jack' }`
- **Queen**: `{ number: 10, name: 'queen' }`
- **King**: `{ number: 10, name: 'king' }`

### Suits

- ❤️ Hearts
- ♠️ Spades
- ♦️ Diamonds
- ♣️ Clubs

## API

### `randomizedDeck()`

Returns a randomized array of 52 unique playing cards.

**Returns:** `Array<Card>` - An array of 52 card objects in random order

**Card Type:**

```typescript
interface Card {
  number: number; // Card value (1-10)
  name: string; // Rank ('ace', 'two', ..., 'king')
  type: string; // Suit ('❤️', '♠️', '♦️', '♣️')
}
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Testing

This package includes a comprehensive test suite covering:

- Deck completeness (exactly 52 unique cards)
- Card properties and values
- Shuffle randomization
- Edge cases and error handling
- Statistical randomness validation

Run tests with:

```bash
npm test
```

## Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and breaking changes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © 2024 Daniel P. Dwyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author

**Daniel P. Dwyer**

- Email: danielpatrickdwyer@gmail.com
- GitHub: [@DanielDwyer](https://github.com/DanielDwyer)
