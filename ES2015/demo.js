class Person {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    getAge(){
        console.log("Age: ", this.age)
    }
}

class Developer extends Person{
    constructor(firstname, lastname){
        super(firstname, lastname, 22)

        this.firstname = firstname
        this.lastname = lastname

       
    }
    getName(){
        return `${this.firstname} ${this.lastname}`
    }
}


let developer = new Developer("Test", "Last")

developer.getAge()