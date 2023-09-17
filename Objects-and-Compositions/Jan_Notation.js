function solve(array){
    let numbers = []
    let new_value;
    let operands = false;
    array.forEach(element => {
        if (typeof(element) === 'number'){
            numbers.push(element)
        }else if (typeof(element) !== 'number' && numbers.length > 1){
            let value = numbers.slice(-2)
            numbers.splice(-2, 2)
            new_value = calc(value, element)
            numbers.push(new_value)

        }else{
            operands = true;
            return operands
        }
    });

    function calc (nums, operator){
        let final;
        if (operator == '+'){
            nums.reduce((x, y) => {
                final = x + y
                
              });
        }else if (operator =='-'){
            nums.reduce((x, y) => {
                final = x - y
             
              });
        }else if (operator == '/'){
            nums.reduce((x, y) => {
                final = x / y
                
              });
        }else if (operator == '*'){
            nums.reduce((x, y) => {
                final = x * y
                
              });
        }

        return final

    }
    
    if (numbers.length > 1){
        return 'Error: too many operands!'
    }else if (operands){
        return 'Error: not enough operands!'
    }else{
        return numbers.join()
    }
}


console.log(solve([7,

    33,
    
    8,
    
    '-']))