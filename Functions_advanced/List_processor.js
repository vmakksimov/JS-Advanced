function solve(array){

    let result = []
    for (let string of array){
        let new_string = string.split(' ')
        let command = new_string[0]
        let word = new_string[1]
        
        if (command === 'add'){
            result.push(word)
        }else if (command === 'remove'){
            result = result.filter(x => x !== word)
        }else{
            console.log(result.join(','))
        }
    }

}

console.log(solve(['add hello', 'add again', 'remove hello',

'add again', 'print']))