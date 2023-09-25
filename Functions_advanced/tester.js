const person = {
    firstName: "John",
    lastName: "Doe",
    vehicle: "BMW",
    model: 'e92',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    newMember: function () {
        return this.vehicle + " " + this.model;
    },
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

const client = {
    firstName: 'Viktor',
    lastName: 'Maksimov',
    vehicle: 'Benz',
    model: 'S klass'
}

let fullName = person.fullName.bind(member);
let new_Client = person.newMember.bind(client);
console.log(person.newMember)