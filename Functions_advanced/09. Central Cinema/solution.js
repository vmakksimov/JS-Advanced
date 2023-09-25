function solve() {
    let name = document.querySelector('input[placeholder=Name]')
    let hall = document.querySelector('input[placeholder=Hall]')
    let ticketPrice = document.querySelector('input[type=text]:nth-child(3)')
    let moviesUl = document.querySelector('#movies ul')
    let archieveUl =document.querySelector('#archive ul')
    let archeieveButton = document.querySelector('#archive button')
    archeieveButton.addEventListener('click', onClear)
    console.log(archeieveButton)
    document.querySelector('button').addEventListener('click', onScreen)
   
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
            buttonArchieve.addEventListener('click', archieveButton)
            
        }
    }

    function archieveButton(e){
        e.preventDefault()
        let isNumber = !isNaN(e.target.previousElementSibling.value)
        if (isNumber){
            let li = document.createElement('li')
            let span = document.createElement('span')
            let strong = document.createElement('strong')
            let button = document.createElement('button')
            button.textContent = 'Delete'
            span.innerHTML = e.target.parentElement.parentElement.children[0].textContent
            strong.textContent = `Total Amount: ${Number(e.target.previousElementSibling.value* Number(e.target.previousSibling.previousSibling.textContent)).toFixed(2)}`

            li.appendChild(span)
            li.appendChild(strong)
            li.appendChild(button)
            archieveUl.appendChild(li)
            e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement)
            button.addEventListener('click', onDelete)
        }
    }

    function onDelete(e){
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    }

    function onClear(e){
        let parent = e.target.parentElement.children[1]
        while (parent.hasChildNodes()){
            parent.removeChild(parent.firstChild)
        }
    }
}