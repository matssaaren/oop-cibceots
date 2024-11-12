
class Person {
    constructor() {
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(firstname = '', lastname = '', age = 0) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const person1 = new Person('Jhon', 'Named', 35)
const person2 = new Person('Jhonny', 'Smith', 99)
const person3 = new Person('Jhonatan', 'Smithers', 0)

const student1 = new Student('')
