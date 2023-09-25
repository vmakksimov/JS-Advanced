function solve(array) {
    let cars = {};

    let obj = {
        create,
        createParent,
        set,
        print
    }

    function create(name) {
        cars[name] = {};
    }

    function createParent(name, parentName, new_obj) {
        Object.assign(cars, { [name]: { [parentName]: new_obj } })

    }

    function set(name, data, value) {
        Object.assign(cars, Object.assign(cars[name], { [data]: value }))

    }

    function print() {

        Object.entries(cars).forEach(el => {
            let result = []
            let a = el[1]
            if (el[0] !== 'c1') {
                let key;
                let value;
                for (let property in a) {
                    let string = ''
                    if (typeof (a[property]) !== 'object') {
                        key = property
                        value = a[property]
                        string += `${key}:${value}`
                        result.push(string)
                    } else {
                        console.log(property)
                        string += `${Object.keys(a[property])}:${Object.values(a[property])}`
                        result.push(string)
                    }
                }

                console.log(result.reverse())
            } else {
                let key = Object.keys(a)
                let value = Object.values(a)
                console.log(`${key}:${value}`)
            }
            []
        })

    }
    array.forEach(element => {
        let current = element.split(' ')
        let command = current[0]
        let name = current[1]


        if (command === 'create') {
            if (!current.includes('inherit')) {
                obj.create(name)
            } else {
                const parentname = current[3]
                let new_obj = cars[parentname]
                obj.createParent(name, parentname, new_obj)
            }
        } else if (command === 'set') {
            let data = current[2]
            let value = current[3]
            const new_obj = { [name]: { [data]: value } }
            obj.set(name, data, value)
        } else {
            obj.print()
        }
    });
}

solve(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])