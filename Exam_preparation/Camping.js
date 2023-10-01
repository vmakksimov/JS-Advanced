class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }


    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.")
        } else if (this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`
        } else if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        let indexElement = this.listOfParticipants.findIndex(x => x.name === name)
        this.listOfParticipants.splice(indexElement, 1)
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let firstPerson = this.listOfParticipants.find(x => x.name === participant1)
        let secondPerson = this.listOfParticipants.find(x => x.name === participant2)

        if (typeOfGame === 'WaterBalloonFights'){
            if (firstPerson === undefined || secondPerson === undefined) {
                throw new Error(`Invalid entered name/s.`)
            }
            
            if (firstPerson.condition !== secondPerson.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            
            if (firstPerson.power > secondPerson.power){
                firstPerson.wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }else if (secondPerson.power > firstPerson.power){
                secondPerson.wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }

            return `There is no winner.`

        }

        if (firstPerson === undefined){
            throw new Error(`Invalid entered name/s.`)
        }

        firstPerson.power += 20
        return `The ${participant1} successfully completed the game ${typeOfGame}.`
        
    }

    toString(){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`

        this.listOfParticipants.sort((a, b) => b['wins'] -a['wins']).forEach(x => {
            result += `${x.name} - ${x.condition} - ${x.power} - ${x.wins}\n`
        })

        return result.trim()

    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));

// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));

console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));



// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));

console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Petar Petarson"));
 console.log(summerCamp.toString())