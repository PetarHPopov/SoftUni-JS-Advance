function makeCard(face, suit) {
    const validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuit = ['S', 'H', 'D', 'C'];
    if (!validFace.includes(face)) {
        throw new Error('Error');
    }
    if (!validSuit.includes(suit)) {
        throw new Error('Error');
    }
    let card = {
        face,
        suit,
        toString() {
            let suitToChar = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663'
            };
            return card.face + suitToChar[card.suit];
        }
    };
    return card;
}

console.log(new makeCard('1', 'C').toString());

