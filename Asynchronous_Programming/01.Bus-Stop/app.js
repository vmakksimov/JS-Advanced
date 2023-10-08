function getInfo() {


    let stopID = document.getElementById('stopId')
    let stopName = document.getElementById('stopName')
    let buses = document.getElementById('buses')
    buses.innerHTML = '';
    let url = 'http://localhost:3030/jsonstore/bus/businfo'
    fetch(`${url}/${stopID.value}`)
        .then(res => res.json())
        .then(result => {
            stopName.textContent = result.name
            Object.entries(result.buses).forEach(x => {
                let li = document.createElement('li')
                li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`
                buses.appendChild(li)
            })
        })
        .catch(error => {
            stopName.textContent = 'Error'
        })
}