class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(length){
        return this.innerLength +=length
    }

    decrease(length){
        if (this.innerLength - length <= 0){
            return this.innerLength = 0
        }else{
            return this.innerLength -= length
        }
        
    }
    toString(){
        if (this.innerLength <= 0){
            return '...'
        }else if (this.innerString.length > this.innerLength){
            let difference = this.innerString.length - (this.innerString.length - this.innerLength)
            let newString = this.innerString.substring(-1, difference)
            newString += '...'
            return newString
        }else{
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString());