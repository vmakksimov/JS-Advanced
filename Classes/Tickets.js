function solve(array, command){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let result = []
    array.forEach(element => {
        let [destination, price, status] = element.split('|')
        let ticket = new Ticket(destination, Number(price), status)
        
        result.push(ticket)
        
    });

}

solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')