// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

class Ninja {
    constructor(name, health ) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }
    sayName() {
        
        console.log(this.name);

    }

    showStats() {
        let info = `Name: ${this.name} // Strength: ${this.strength} // Speed: ${this.speed} // Health: ${this.healthy}`
        
        console.log(info)
    }

    drinkSake () {
    this.health += 10;
    }
}



class Sensei extends Ninja {
    constructor (name) {
        super (name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        
        this.drinkSake();
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei("Master Splinter", 200);

superSensei.sayName();

superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."

superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"