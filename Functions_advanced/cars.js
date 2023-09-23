function solve(array){
    let cars = {

    }

    let obj = {
        create,
        createParent,
        set,
        print
    }

    function create(name){
        cars[name] = {};
    }

    function createParent(name, parentName, new_obj){
        let a = name
        let b = parentName

        Object.assign(cars, {[name]: {[parentName]: new_obj}})
       
    }

    function set(name, data, value){
        if (cars.hasOwnProperty(name)){
            cars[name] = {
                data: value
            }
        }

    }

    function print (){
        console.log(cars)
    }

    array.forEach(element => {
        let current = element.split(' ')
        let command = current[0]
        let name = current[1]
       
       
        if (command === 'create'){
            if (!current.includes('inherit')){
                obj.create(name)
            }else{
                const parentname = current[3]
                let new_obj = cars[parentname]
                obj.createParent(name, parentname, new_obj)
            }
        }
    });
}

solve(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])