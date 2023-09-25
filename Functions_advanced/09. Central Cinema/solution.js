function solve() {
    let name = document.querySelector('input[placeholder=Name]')
    let hall = document.querySelector('input[placeholder=Hall]')
    let ticketPrice = document.querySelector('input[type=text]:nth-child(3)')
    let moviesUl = document.querySelector('#movies ul')

    let onScreenButton = document.querySelector('button').addEventListener('click', onScreen)
   
    function onScreen(e){
        e.preventDefault()
        let isValue = isNaN(ticketPrice.value)
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isValue){
            let li = document.createElement('li')
            let span = document.createElement('span')
            let strong = document.createElement('strong')
            let div = document.createElement('div')
            let divStrong = document.createElement('strong')
            let input = document.createElement('input')
            let buttonArchieve = document.createElement('button')

            buttonArchieve.textContent = 'Archieve'
            input.placeholder = 'Tickets Sold'
            span.textContent = name.value
            strong.textContent = `Hall: ${hall.value}`
            divStrong.textContent = Number(ticketPrice.value).toFixed(2)

            div.appendChild(divStrong)
            div.appendChild(input)
            div.appendChild(buttonArchieve)
            li.appendChild(span)
            li.appendChild(strong)
            li.appendChild(div)
            moviesUl.appendChild(li)

            name.value = ''
            hall.value = ''
            ticketPrice.value = ''
            
        }
    }
}