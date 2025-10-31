export interface Card {
  number: number;
  name: string;
  type: string;
}

/**
 * Returns a randomized deck of 52 standard playing cards.
 * Each card is represented as an object with `number`, `name`, and `type` properties.
 * 
 * @returns An array of 52 Card objects in random order
 * 
 * @example
 * const deck = randomizedDeck();
 * console.log(deck[0]); // { number: 7, name: 'seven', type: '♠️' }
 */
declare function randomizedDeck(): Card[];

export default randomizedDeck;
export { randomizedDeck };
