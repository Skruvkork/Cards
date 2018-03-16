class Minion extends Card {
    constructor(type, cost, hp, attack, name) {
        super(type, cost, name);
        this.hp = hp;
        this.attack = attack;
    }


    render() {
        return `<div class="card" id="${this.id}">
                    <span class="mana-cost">${this.cost}</span>
                    <div class="card-image"></div>
                    <p class="card-name">${this.name}</p>
                    <span class="attack">${this.attack}</span>
                    <span class="hp">${this.hp}</span>
                    <span class="card-type">Minion</span>
                </div>`;
    }
}