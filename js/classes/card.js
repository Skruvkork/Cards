class Card {
    constructor(type, cost, name) {
        this.id = chance.word({lenght: 10});
        this.type = type;
        this.cost = cost;
        this.name = name;
    }

    bindEvents() {
        const card = document.getElementById(this.id);
        card.addEventListener('mousedown', this.grab.bind(this));
    }

    grab(e) {
        console.log(this);
    }

    render() {};
}