function solve(){
    let new_obj = {}
    let result = []
    Array.from(arguments).forEach(el => {
        
        if (new_obj.hasOwnProperty(typeof(el))){
            new_obj[typeof(el)]++
        }else{
            new_obj[typeof(el)] = 1
        }
        result.push(`${typeof(el)}: ${el}`)
    })
    for (let types of result){
        console.log(types)
    }
    Object.keys(new_obj).sort((a,b) => new_obj[b] - new_obj[a]).forEach(el => {
        console.log(`${el} = ${new_obj[el]}`)
    })
    
}

solve('cat', 42, function () { console.log('Hello world!'); })