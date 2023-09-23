function solve(array) {

    let collection = [];

    let result = {
        add,
        remove,
        print
    }

    function add(str) {
        collection.push(str)

    }

    function remove(str) {
        collection = collection.filter(x => x !== str)
    }

    function print() {
        console.log(collection.join(','))
    }

    for (let el of array) {
        let line = el.split(' ')
        let command = line[0]
        let word = line[1]

        if (command === 'add') {
            result.add(word)
        } else if (command === 'remove') {

            result.remove(word)

        } else {
            result.print()
        }
    }


}

solve(['add hello', 'add again', 'remove hello',

    'add again', 'print'])