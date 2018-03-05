class Spell extends Card {
    constructor(type, cost, description, name) {
        super(type, cost, name);
        this.description = description;
    }


    render() {
        return `<div class="card">
                    <span class="mana-cost">${this.cost}</span>
                    <div class="card-image"></div>
                    <p class="card-name">${this.name}</p>
                    <p class="card-description">${this.description}</p>
                    <span class="card-type">Spell</span>
                </div>`;
    }
}