function solution(number){
    // data = new Map();
    // console.log(data.size)

    function add(a, b){
        return a + b;
    }
        
    return add.bind(this, number)


}


let add5 = solution(5);
console.log(add5(2));

console.log(add5(3));