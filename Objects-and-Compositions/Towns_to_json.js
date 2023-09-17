function solve(array) {

    let final_result = []
    let town;
    let latitude;
    let longtitude;
    let names = array[0].split('|')
    town = names[1].trim()
    latitude = names[2].trim()
    longtitude = names[3].trim()

    for (let i = 1; i < array.length; i++){
        let new_obj = {}
        let towns = array[i].split('|')
        let current_town = towns[1].trim()
        let current_lat = Number(towns[2].trim()).toFixed(2)
        let current_long = Number(towns[3].trim()).toFixed(2)
        new_obj[town] = current_town
        new_obj[latitude] = Number(current_lat)
        new_obj[longtitude] = Number(current_long)
        final_result.push(new_obj)

    }

    return  JSON.stringify(final_result)

}

console.log(solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']))