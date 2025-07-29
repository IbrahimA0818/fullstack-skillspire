// Create a Big Cat class
//  Give the class properties of speed, strength, intelligence, health and durability. And set all attributes to 5
// Create a Lion class that inherits from the BigCat class and set the Lion's strength to 50 and health to 50
// Give the Lion class a method called king() that accepts a BigCat object as a parameter and depletes all the objects 
// attributes (sets them to 0). If the object is a Cheetah then it should have a 60% chance of leaving unscathed. (Hint use a random number generator)
// Create a Leopard class that inherits from the BigCat class and set the Leopard's strength, intelligence, and health to 30
// Give the Leopard a method called attack that accepts a BigCat object. If the object is a lion then you must run the Lion's king()  function,
//  if the object is anything else then you must deplete the objects health by 15points. If the object is a Cheetah then it should have a 60% chance of leaving unscathed.
//  (Hint use a random number generator)
// Create a Cheetah class that inherits from the BigCat class and set the Cheetah's speed to 75, and the rest of its attributes to 25
// Give the Cheetah a method called run() that accepts a BigCat object. If it encounter's a Leopard run the Leopard's attack method.
//  If it encounters the Lion run the Lion's king() method. 
// If the Cheetah runs away from any of its foes then they lose 20 points in health.
// Now after doing all of this try to create a game where ALL objects get created and All their methods are used. In the end there should only be one winner. 
// Challenge: Try to make your game challenging enough so that the Lion doesn't win every single time
class BigCat{
    constructor(name = 'Bigcat', speed=5, strength=5, int=5, health=5, dur=5){
        this.name = name;
        this.speed =speed;
        this.strength = strength;
        this.int = int;
        this.health = health;
        this.dur = dur;
    }

    isAlive() {
        return this.health > 0;
    }

    status(name) {
        console.log(`${name} - Health: ${this.health}`);
    }

}
class Lion extends BigCat{
    constructor(){
        super('LION');
        this.strength=50;
        this.health=50;
    }
    king(BigCat){
        if (BigCat instanceof Cheetah){
            let random = Math.round(Math.random() * 11);
            if (random<=6){
                console.log('cheetah has left unscathed');
                return;
            }
            else if (BigCat instanceof Leopard){
                let random = Math.round(Math.random() * 11);

                if (random<=4){
                    console.log('leopard has left unscathed');
                return;
                }
            }
        }
        BigCat.speed = 0;
        BigCat.strength = 0;
        BigCat.int = 0;
        BigCat.health = 0;
        BigCat.dur = 0;
        console.log('lion used King target is dead')
    }
}
class Leopard extends BigCat{
    constructor(){
        super("LEOPARD");
        this.strength=30;
        this.int=30;
        this.health=30;
    }
    attack(target){
        if(target instanceof Cheetah){
            let random = Math.round(Math.random() * 11);

            if (random <=6){
                console.log('cheetah dodged the leopard attack');
                return;
            } else{
                target.health -= 15;
                console.log('Cheetah got hit -15 health')
                
            }
        }else if (target instanceof Lion){
            target.king(this);
        } else{
            target.health -= 30;
            console.log('target got hit -30 health');
        }
    }
}
class Cheetah extends BigCat{
    constructor(){
        super('CHEETAH');
        this.speed = 75;
        this.strength=25;
        this.health=25;
        this.int=25;
        this.dur=25;
    }
    run(target){
        if (target instanceof Lion){
            target.king(this);
        } else if (target instanceof Leopard){
            target.attack(this);
        } else{
            target.health -= 20;
            console.log('cheetah escaped and did 20 damage');
        }

    }
}
// Create one of each big cat
let lion = new Lion();
let leopard = new Leopard();
let cheetah = new Cheetah();

// Round 1
console.log("\n--- ROUND 1 ---");
cheetah.run(leopard);   
leopard.attack(lion);  
lion.king(cheetah);     

// Round 2
console.log("\n--- ROUND 2 ---");
if (cheetah.isAlive()) cheetah.run(lion);
if (leopard.isAlive()) leopard.attack(cheetah);
if (lion.isAlive()) lion.king(leopard);

// Status
console.log("\n--- FINAL STATUS ---");
cheetah.status("Cheetah");
leopard.status("Leopard");
lion.status("Lion");

console.log("\n--- WINNER ---");
let cats = [
    { name: "Cheetah", obj: cheetah },
    { name: "Leopard", obj: leopard },
    { name: "Lion", obj: lion }
];
let aliveCats = cats.filter(cat => cat.obj.isAlive());
if (aliveCats.length === 1) {
    console.log(`${aliveCats[0].name} is the winner!`);
} else if (aliveCats.length > 1) {
    console.log("It's a tie between:", aliveCats.map(cat => cat.name).join(", "));
} else {
    console.log("No survivors.");
}
