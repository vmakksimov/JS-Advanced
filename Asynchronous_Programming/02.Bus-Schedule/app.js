function solve() {
    let url = 'http://localhost:3030/jsonstore/bus/schedule'
    let span = document.querySelector('.info')
    let arriveBTN = document.getElementById('arrive')
    let departBTN = document.getElementById('depart')
    let stop = {
        next: 'depot'
    }

    async function depart() {

        try {
            const res = await fetch(`${url}/${stop.next}`)
            if (res.status !== 200) {
                throw new Error('Server not found')
            }
            stop = await res.json()
            span.textContent = `Next stop ${stop.name}`
            departBTN.disabled = true
            arriveBTN.disabled = false

        } catch (error) {
            console.log(error)
        }

    }

    async function arrive() {
        span.textContent = `Arrived at ${stop.name}`
        console.log(stop)
        departBTN.disabled = false
        arriveBTN.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();