class Hero {
    constructor(hp, armor, attack) {
        this.hp     = hp ? hp : 30;
        this.armor  = armor ? armor : 0;
        this.attack = attack ? attack : 0;
    }

    takeDamage(damage) {
        const unBlockedDamage = damage - this.armor;
        if (unBlockedDamage > 0) {
            this.armor = 0;
        } else {
            this.armor -= damage;
        }
        this.hp -= unBlockedDamage;
    }


    heal(health) {
        this.hp += health;
    }


    armorUp(armor) {
        this.armor += armor;
    }


    attack(target) {
        target.takeDamage(this.attack);
    }


    setAttack(attack) {
        this.attack = attack;
    }

    setHp(hp) {
        this.hp = hp;
    }

    setArmor(armor) {
        this.armor = armor;
    }


    render() {
        return `<div class="hero">
                    <span class="attack">${this.attack}</span>
                    <span class="hp">${this.hp}</span>
                </div>`;
    }
}