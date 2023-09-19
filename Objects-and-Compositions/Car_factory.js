function solve(car) {

    const modelCar = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 },
        Hatchback: { type: 'hatchback', color: car.color },
        Coupe: { type: 'coupe', color: car.color }

    }

    let chosenCar = {}
    chosenCar['model'] = car.model

    if (car.power <= modelCar.smallEngine.power){
        chosenCar['engine'] = modelCar.smallEngine
    }else if (car.power >= modelCar.MonsterEngine.power ){
        chosenCar['engine'] = modelCar.MonsterEngine
    }else if (car.power < modelCar.MonsterEngine.power){
        chosenCar['engine'] = modelCar.normalEngine
    }

    if (car.carriage === 'hatchback'){
        chosenCar['carriage'] = modelCar.Hatchback
    }else{
        chosenCar['carriage'] = modelCar.Coupe
    }

    let new_size = car.wheelsize

    if (new_size % 2 === 0){
        new_size -= 1
    }

    chosenCar['wheels'] = [new_size, new_size, new_size, new_size]

    return chosenCar


}

console.log(solve({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}))