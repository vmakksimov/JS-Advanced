class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        Object.defineProperty(this, 'fullName', {
            get: function (){
                return `${this.first} ${this.second}`
            },

            set: function(value){
                let [first, second] = value.split(' - ')
                this.first = first
                this.second = second
            }
        })

    }

}

let person = new Person("Peter", "Ivanov");
person.fullName = 'Viktor - 32'
console.log(person.fullName);
console.log(person)