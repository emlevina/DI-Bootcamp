// Evaluate these (ie True or False)

[2] === [2] // false
console.log({} === {}) // false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }

    sound(sound){
        return `I ${sound}, that I'm a ${this.type} called ${this.name} of ${this.color} color!`
    }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mamal('Boogy', 'cow', 'black')
console.log(farmerCow.sound('moo'))
// For example: Moooo I'm a cow, named Lily and I'm brown and white
