function juiceFlavor(array) {

    let producedBottles = []
    let inProductionBottles = []
    let productForProduction = {};
    let productInProduction = {};
    let notInProduction = true

    array.forEach(element => {
        let currentData = element.split(' => ')
        let product = currentData[0]
        let quantity = Number(currentData[1])


        if (quantity / 1000 > 1) {
            let difference = Number(((quantity / 1000) - Math.floor(quantity / 1000)).toFixed(3))
            if (!productInProduction.hasOwnProperty(product)) {

                productInProduction[product] = Number(difference.toFixed(3))
            } else {
                productInProduction[product] += quantity / 1000
                return bottlesForProduction()
            }

            if (inProductionBottles.length <= 0) {

                inProductionBottles.push({ [product]: Math.floor(quantity / 1000) })
            } else {
                inProductionBottles.map(x => {
                    if (!x.hasOwnProperty(product)) {

                        inProductionBottles.push({ [product]: Math.floor(quantity / 1000) })
                    } else {
                        x[product] += Math.floor(quantity / 1000)
                    }
                })
            }

        } else if (quantity / 1000 < 1) {
            if (!productInProduction.hasOwnProperty(product)) {
                productInProduction[product] = quantity / 1000
            } else {
                productInProduction[product] += quantity / 1000
                bottlesForProduction()
            }
        } else {
            producedBottles.push({
                product: quantity
            })
        }

        function bottlesForProduction() {

            let lefover = Number((productInProduction[product] - Math.floor(productInProduction[product])).toFixed(3))
            let fullBottle = productInProduction[product] - lefover
            productInProduction[product] -= fullBottle

            for (let el of inProductionBottles){
                if (el.hasOwnProperty(product)){
                    el[product] += fullBottle
                    return el[product]
                }
            }

            inProductionBottles.push({ [product]: fullBottle })

        }

    });

    let result = ''

    for (let key of inProductionBottles){
        result += `${Object.keys(key)} => ${Object.values(key)}\n`
    }

    return result.trim()


}

console.log(juiceFlavor(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549']))