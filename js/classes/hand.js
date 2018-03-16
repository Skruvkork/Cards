class Hand {
    constructor(cards) {
        this.cards = cards ? cards : [];
    }


    addCard(card) {
        this.cards.push(card);
    }


    removeCard(card) {
        this.cards = this.cards.filter(c => c.name != card.name);
    }


    render() {
        return `<div class="hand">
                    ${this.cards.map(card => card.render()).join('')}
                </div>`
    }
}