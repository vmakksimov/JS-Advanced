async function getInfo() {


    let stopID = document.getElementById('stopId').value
    let stopName = document.getElementById('stopName')
    let buses = document.getElementById('buses')
    buses.innerHTML = '';
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`

    try {

        stopName.textContent = 'Loading'
        const res = await fetch(url)
        if (res.status !== 200){
            throw new Error('Server not found')
        }

        const data = await res.json()


        stopName.textContent = data.name
        Object.entries(data.buses).forEach(el => {
            iteam = document.createElement('li')
            iteam.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`
            buses.appendChild(iteam)
            
        })

    }catch{
        stopName.textContent = 'Error'
    }
    // fetch(`${url}/${stopID.value}`)
    //     .then(res => res.json())
    //     .then(result => {
    //         stopName.textContent = result.name
    //         Object.entries(result.buses).forEach(x => {
    //             let li = document.createElement('li')
    //             li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`
    //             buses.appendChild(li)
    //         })
    //     })
    //     .catch(error => {
    //         stopName.textContent = 'Error'
    //     })
}