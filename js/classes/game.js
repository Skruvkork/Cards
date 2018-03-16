class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        this.activePlayer = {};
    }


    bindEvents() {
        this.player1.hand.cards.forEach(card => card.bindEvents());
    }


    startGame() {

        this.player1.deck.randomize();
        this.player2.deck.randomize();

        this.player1.deck.shuffle();
        this.player2.deck.shuffle();


        this.player1.drawCards(3);
        this.player2.drawCards(3);

        this.activePlayer = this.decideStartingPlayer(this.player1, this.player2);

        this.activePlayer.startTurn();

        this.render();
    }

    startTurn() {

    }


    decideStartingPlayer(p1, p2) {
        return Math.floor(Math.random() * 2) ? p1 : p2; 
    }

    render() {
        return `<div class="player2">${this.player2.render()}</div>
                <div class="hero-area">${this.player2.hero.render()}</div>
                <div class="board">
                    ${this.player2.board.map(card => card.render())}
                    ${this.player1.board.map(card => card.render())}
                </div>
                <div class="hero-area">${this.player1.hero.render()}</div>
                <div class="player1">${this.player1.render()}</div>`;
    }
}