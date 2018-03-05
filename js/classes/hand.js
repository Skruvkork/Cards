class Hand {
    constructor(cards) {
        this.cards = cards ? cards : [];
    }


    addCard(card) {
        this.cards.push(card);
    }


    render() {
        console.log(this.cards)
        return `<div class="hand">
                    ${this.cards.map(card => card.render()).join('')}
                </div>`
    }
}