# deck-o-cards

[![npm version](https://img.shields.io/npm/v/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dm/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dt/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![Downloads](https://img.shields.io/npm/dw/deck-o-cards.svg)](https://www.npmjs.com/package/deck-o-cards)
[![License](https://img.shields.io/npm/l/deck-o-cards.svg)](LICENSE)
[![Node Version](https://img.shields.io/node/v/deck-o-cards.svg)](https://nodejs.org/)

A simple, efficient, and well-tested function that returns a randomized deck of 52 standard playing cards. Perfect for card games, casino simulations, or any application requiring a shuffled deck.

## Features

- Simple API: single function call returns a shuffled deck
- Fast & Efficient: Uses Fisher-Yates shuffle algorithm for O(n) performance
- Complete Deck: Returns exactly 52 unique cards (4 suits × 13 ranks)
- TypeScript Support: Full TypeScript definitions included
- Well Tested: Comprehensive test suite with 100% coverage
- Zero Dependencies: Lightweight with no external dependencies
- ES6+ Compatible: Modern JavaScript with Node 14+ support

## Install

```bash
npm install deck-o-cards
```

Peer requirements:

- Node >= 14.0.0

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

## Card Structure

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

## Examples

### Basic Usage

```javascript
const randomizedDeck = require('deck-o-cards');
const deck = randomizedDeck();

// Each card has three properties:
deck.forEach((card) => {
  console.log(`${card.number} - ${card.name} - ${card.type}`);
});
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

## Contributing

Issues and PRs are welcome. To work locally:

```bash
npm install
npm test
```

Please follow conventional commits and include tests for behavior changes.

### Run tests

```bash
npm test
# or
npm run test:watch
```

### Lint code

```bash
npm run lint
# or
npm run lint:fix
```

### Format code

```bash
npm run format
# or
npm run format:check
```

## Versioning

This package follows semver. Breaking changes will bump the major version.

## License

MIT © Daniel P. Dwyer (https://www.linkedin.com/in/inmocnideknil/)

## Release and publishing

Releases are automated via semantic-release when changes land on `main`.

- Commit messages should follow Conventional Commits (e.g., `feat:`, `fix:`) so semantic-release can determine the version bump.
- The GitHub Actions workflow builds and publishes to npm on successful release.

Required secret for publishing:

- `NPM_TOKEN`: An npm "Automation" access token (not an "Always" or "Read-only" token). Create at npmjs.com → Access Tokens → Generate → Automation, then add it to GitHub → Settings → Secrets and variables → Actions → New repository secret.

Manually retrying a release:

- Re-run the failed "Release" workflow run on `main`, or push a docs-only commit with a Conventional Commit (e.g., `fix: docs`) to trigger a new patch release.
