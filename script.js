/**Blackjack
 * by Adela Adeoye
 * a follow course by Mark Zamoyta
 * github::github.com/adelaadeoye
 */

let suits = ['Heart', 'Clubs', 'Diamond', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six',
        'Five', 'Four', 'Three', 'Two'
    ];
createDeck = () => {
    let deck = [];
    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            deck.push(`${values[valuesIdx]} of ${suits[suitsIdx]} `)
        }
    }
    return deck;
}
getNextCard = () => {
    return deck.shift();
}
let deck = createDeck();
console.log('Welcome to Blackjack by Adela');
for (i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}
let playerCards = [getNextCard(), getNextCard()];
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);