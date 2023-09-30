const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum);


const newObj = new Map()
let juice = 'Orange'
let quantity = 2


newObj.set(juice, quantity)
