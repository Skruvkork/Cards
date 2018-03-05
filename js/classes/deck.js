class Deck {
    constructor() {
        this.cards = [];
    }

    shuffle() {
        var deckCopy = this.cards.slice();
        var currentIndex = deckCopy.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deckCopy[currentIndex];
            deckCopy[currentIndex] = deckCopy[randomIndex];
            deckCopy[randomIndex] = temporaryValue;
        }

        this.cards = deckCopy;
    }


    drawCard() {
        return this.cards.pop();
    }


    hasCards() {
        return this.cards.length > 0 ? true : false;
    }


    randomize() {

        for(var i = 0; i < 30; i++) {
            if(chance.coin() === 'heads') {
                this.cards.push(new Minion('minion', chance.d10(), chance.d10(), chance.d10(), chance.animal()));
            } else {
                this.cards.push(new Spell('spell', chance.d10(), chance.sentence({words: 6}), chance.word()));
            }
        }
    }
}