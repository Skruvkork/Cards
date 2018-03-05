class Player {
    constructor(hero, mana, deck, hand, board) {
        this.hero = hero ? hero : new Hero();
        this.mana = mana ? mana : 0;
        this.deck = deck ? deck : new Deck();
        this.hand = hand ? hand : new Hand();
        this.board = board ? board : [];
        this.fatigueCounter = 0;
    }

    startTurn() {
        this.addMana();

        if(this.deck.hasCards()) {
            this.drawCards(1);
        } else {
            this.fatigue();
        }
        
    }

    endTurn() {

    }


    addMana() {
        this.mana++;
    }


    fatigue() {
        this.fatigueCounter++;
        this.hero.takeDamage(this.fatigueCounter);
    }


    drawCards(number) {
        for (var i = 0; i < number; i++) {
            this.hand.addCard(this.deck.drawCard());
        }
    }


    render() {
        return `<div>${this.hand.render()}</div>`;
    }
}