const randomizedDeck = require('../index');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('randomizedDeck', () => {
  describe('Basic Functionality', () => {
    it('should return an array', () => {
      const deck = randomizedDeck();
      expect(deck).to.be.an('array');
    });

    it('should return exactly 52 cards', () => {
      const deck = randomizedDeck();
      expect(deck.length).to.equal(52);
    });

    it('should return an array of objects', () => {
      const deck = randomizedDeck();
      expect(deck).to.be.an('array');
      deck.forEach((card) => {
        expect(card).to.be.an('object');
      });
    });

    it('each card should have number, name, and type properties', () => {
      const deck = randomizedDeck();
      deck.forEach((card) => {
        expect(card).to.have.property('number');
        expect(card).to.have.property('name');
        expect(card).to.have.property('type');
      });
    });

    it('should return different order on multiple calls', () => {
      const deck1 = randomizedDeck();
      const deck2 = randomizedDeck();

      // Extremely unlikely to have same order (1 in 52!)
      let differences = 0;
      for (let i = 0; i < 52; i++) {
        if (deck1[i].name !== deck2[i].name || deck1[i].type !== deck2[i].type) {
          differences++;
        }
      }

      // Very likely to have at least some differences
      expect(differences).to.be.greaterThan(0);
    });
  });

  describe('Deck Completeness', () => {
    it('should contain all 4 suits', () => {
      const deck = randomizedDeck();
      const suits = new Set(deck.map((card) => card.type));
      expect(suits.size).to.equal(4);
      expect(suits.has('❤️')).to.be.true;
      expect(suits.has('♠️')).to.be.true;
      expect(suits.has('♦️')).to.be.true;
      expect(suits.has('♣️')).to.be.true;
    });

    it('should contain all 13 ranks', () => {
      const deck = randomizedDeck();
      const ranks = new Set(deck.map((card) => card.name));
      expect(ranks.size).to.equal(13);

      const expectedRanks = [
        'ace',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'jack',
        'queen',
        'king'
      ];
      expectedRanks.forEach((rank) => {
        expect(ranks.has(rank)).to.be.true;
      });
    });

    it('should contain exactly 13 cards of each suit', () => {
      const deck = randomizedDeck();
      const suits = ['❤️', '♠️', '♦️', '♣️'];

      suits.forEach((suit) => {
        const suitCards = deck.filter((card) => card.type === suit);
        expect(suitCards.length).to.equal(13);
      });
    });

    it('should contain exactly 4 cards of each rank', () => {
      const deck = randomizedDeck();
      const ranks = [
        'ace',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'jack',
        'queen',
        'king'
      ];

      ranks.forEach((rank) => {
        const rankCards = deck.filter((card) => card.name === rank);
        expect(rankCards.length).to.equal(4);
      });
    });

    it('should have no duplicate cards', () => {
      const deck = randomizedDeck();
      const uniqueCards = new Set(deck.map((card) => `${card.name}-${card.type}`));
      expect(uniqueCards.size).to.equal(52);
    });
  });

  describe('Card Values', () => {
    it('should have correct numeric values', () => {
      const deck = randomizedDeck();

      deck.forEach((card) => {
        expect(card.number).to.be.a('number');

        if (card.name === 'ace') {
          expect(card.number).to.equal(1);
        } else if (
          ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].includes(card.name)
        ) {
          const expectedValue =
            card.name === 'two'
              ? 2
              : card.name === 'three'
              ? 3
              : card.name === 'four'
              ? 4
              : card.name === 'five'
              ? 5
              : card.name === 'six'
              ? 6
              : card.name === 'seven'
              ? 7
              : card.name === 'eight'
              ? 8
              : 9;
          expect(card.number).to.equal(expectedValue);
        } else if (['ten', 'jack', 'queen', 'king'].includes(card.name)) {
          expect(card.number).to.equal(10);
        }
      });
    });

    it('should have face cards with value 10', () => {
      const deck = randomizedDeck();
      const faceCards = deck.filter((card) => ['jack', 'queen', 'king'].includes(card.name));

      faceCards.forEach((card) => {
        expect(card.number).to.equal(10);
      });

      expect(faceCards.length).to.equal(12); // 3 ranks * 4 suits
    });

    it('should have numbered cards with correct values', () => {
      const deck = randomizedDeck();
      const numberedCards = deck.filter((card) =>
        ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].includes(card.name)
      );

      numberedCards.forEach((card) => {
        const expectedValue =
          card.name === 'two'
            ? 2
            : card.name === 'three'
            ? 3
            : card.name === 'four'
            ? 4
            : card.name === 'five'
            ? 5
            : card.name === 'six'
            ? 6
            : card.name === 'seven'
            ? 7
            : card.name === 'eight'
            ? 8
            : 9;
        expect(card.number).to.equal(expectedValue);
      });

      expect(numberedCards.length).to.equal(32); // 8 ranks * 4 suits
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple sequential calls', () => {
      for (let i = 0; i < 100; i++) {
        const deck = randomizedDeck();
        expect(deck.length).to.equal(52);

        // Check completeness
        const suits = new Set(deck.map((card) => card.type));
        expect(suits.size).to.equal(4);
      }
    });

    it('should handle being called 1000 times', function () {
      this.timeout(5000); // Allow more time for large test

      for (let i = 0; i < 1000; i++) {
        const deck = randomizedDeck();
        expect(deck.length).to.equal(52);
      }
    });

    it('should not mutate returned arrays between calls', () => {
      const deck1 = randomizedDeck();
      const deck2 = randomizedDeck();

      // Manipulate deck1
      deck1[0] = { number: 99, name: 'test', type: 'test' };

      // deck2 should be unaffected
      expect(deck2[0].number).to.not.equal(99);
    });

    it('should produce statistically random distributions', function () {
      this.timeout(10000);

      const positions = Array(52)
        .fill(0)
        .map(() => ({}));
      const iterations = 1000;

      // Track which card appears at each position
      for (let i = 0; i < iterations; i++) {
        const deck = randomizedDeck();
        deck.forEach((card, idx) => {
          const cardKey = `${card.name}-${card.type}`;
          if (!positions[idx][cardKey]) {
            positions[idx][cardKey] = 0;
          }
          positions[idx][cardKey]++;
        });
      }

      // Each card should appear at each position roughly equally
      // For 1000 iterations, each card should appear at each position about ~19 times (1000/52)
      positions.forEach((position) => {
        const cardCounts = Object.values(position);
        const minCount = Math.min(...cardCounts);
        const maxCount = Math.max(...cardCounts);

        // Allow for some variance but not too much (very unlikely all positions have same card)
        expect(minCount).to.be.greaterThan(3);
        expect(maxCount).to.be.lessThan(50);
      });
    });
  });

  describe('API Consistency', () => {
    it('should maintain consistent return structure', () => {
      const deck = randomizedDeck();

      deck.forEach((card) => {
        expect(card).to.have.keys(['number', 'name', 'type']);
        expect(typeof card.number).to.equal('number');
        expect(typeof card.name).to.equal('string');
        expect(typeof card.type).to.equal('string');
      });
    });

    it('should have valid suit emojis', () => {
      const deck = randomizedDeck();
      const validSuits = ['❤️', '♠️', '♦️', '♣️'];

      deck.forEach((card) => {
        expect(validSuits).to.include(card.type);
      });
    });

    it('should have valid rank names', () => {
      const deck = randomizedDeck();
      const validRanks = [
        'ace',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'jack',
        'queen',
        'king'
      ];

      deck.forEach((card) => {
        expect(validRanks).to.include(card.name);
      });
    });
  });
});
