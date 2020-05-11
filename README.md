# deck-o-cards

![Downloads](https://img.shields.io/npm/dw/deck-o-cards.svg)
![Downloads](https://img.shields.io/npm/dm/deck-o-cards.svg)
![Downloads](https://img.shields.io/npm/dt/deck-o-cards.svg)
![npm version](https://img.shields.io/npm/v/deck-o-cards.svg)
![License](https://img.shields.io/npm/l/deck-o-cards.svg)


This Node Package has a single purpose: to return one deck of 52 playing cards that are completely randomized. It is then up to you how to use the randomized deck: black jack, poker, gin rummy, guessing games. It returns set of cards: `{{ number: 2, name: 'two', type: '♠️' }...}`

## How To Use
#### Install it via npm:
```bash
$ npm i deck-o-cards
```
#### Require Locally:
```js
const deckOCards = require('deck-o-cards');
```
#### Call Locally:
```js
const deck = deckOCards.randomizedDeck();

deck = {
  { number: 2, name: 'two', type: '♠️' },
  { number: 9, name: 'nine', type: '♦️' },
  { number: 6, name: 'six', type: '♠️' },
  { number: 1, name: 'ace', type: '♦️' },
  { number: 10, name: 'ten', type: '♣️' },
  { number: 10, name: 'jack', type: '♠️' },
  { number: 10, name: 'jack', type: '♠️' },
  { number: 10, name: 'jack', type: '❤️' },
  { number: 10, name: 'ten', type: '♠️' },
  { number: 2, name: 'two', type: '♠️' },
  { number: 3, name: 'three', type: '❤️' },
  { number: 6, name: 'six', type: '♣️' },
  { number: 8, name: 'eight', type: '♠️' },
  { number: 10, name: 'king', type: '❤️' },
  { number: 10, name: 'jack', type: '♣️' },
  { number: 4, name: 'four', type: '❤️' },
  { number: 2, name: 'two', type: '❤️' },
  { number: 10, name: 'jack', type: '♦️' },
  { number: 2, name: 'two', type: '❤️' },
  { number: 1, name: 'ace', type: '❤️' },
  { number: 5, name: 'five', type: '♣️' },
  { number: 1, name: 'ace', type: '♠️' },
  { number: 10, name: 'queen', type: '❤️' },
  { number: 10, name: 'ten', type: '♦️' },
  { number: 9, name: 'nine', type: '❤️' },
  { number: 4, name: 'four', type: '♦️' },
  { number: 8, name: 'eight', type: '♦️' },
  { number: 4, name: 'four', type: '❤️' },
  { number: 4, name: 'four', type: '♠️' },
  { number: 10, name: 'jack', type: '♦️' },
  { number: 1, name: 'ace', type: '❤️' },
  { number: 9, name: 'nine', type: '♠️' },
  { number: 10, name: 'queen', type: '♦️' },
  { number: 3, name: 'three', type: '♣️' },
  { number: 3, name: 'three', type: '❤️' },
  { number: 7, name: 'seven', type: '❤️' },
  { number: 3, name: 'three', type: '♠️' },
  { number: 2, name: 'two', type: '♣️' },
  { number: 1, name: 'ace', type: '♦️' },
  { number: 4, name: 'four', type: '❤️' },
  { number: 4, name: 'four', type: '♠️' },
  { number: 2, name: 'two', type: '❤️' },
  { number: 10, name: 'jack', type: '♦️' },
  { number: 6, name: 'six', type: '❤️' },
  { number: 7, name: 'seven', type: '♣️' },
  { number: 10, name: 'king', type: '♠️' },
  { number: 6, name: 'six', type: '❤️' },
  { number: 9, name: 'nine', type: '♣️' },
  { number: 9, name: 'nine', type: '♣️' },
  { number: 6, name: 'six', type: '♠️' },
  { number: 2, name: 'two', type: '❤️' },
  { number: 10, name: 'ten', type: '❤️' }
};
```

### License

MIT Copyright 2020 Daniel P. Dwyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
