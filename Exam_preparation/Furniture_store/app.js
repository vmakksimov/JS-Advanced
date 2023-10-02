window.addEventListener('load', solve);

function solve() {
    //TO DO

    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let description = document.getElementById('description')
    let price = document.getElementById('price')
    let buttonAdd = document.getElementById('add')
    let furnitureList = document.getElementById('furniture-list')
    let totalPrice = document.querySelector('.total-price')
    buttonAdd.addEventListener('click', onAdd)

    function create(tag, content){
        const e = document.createElement(tag)
        e.innerHTML = content
        return e
    }

    function onAdd(e){
        e.preventDefault()
        console.log(Number(year.value))
        if (model.value !== '' && description.value !== '' && Number(year.value) >=0  && Number(price.value) >= 0){
            let trInfo = document.createElement('tr')
        
            trInfo.className = 'info'

            let tdEelement = create('td', model.value)
            let tdPrice = create('td', Number(price.value))
            let tdButtons = create('td', '')
            let moreBtn = create('button', 'More Info')
            moreBtn.className = 'moreBtn'
            let buyBtn = create('button', 'Buy it')
            buyBtn.className = 'buyBtn'

            tdButtons.appendChild(moreBtn)
            tdButtons.appendChild(buyBtn)

            trInfo.appendChild(tdEelement)
            trInfo.appendChild(tdPrice)
            trInfo.appendChild(tdButtons)

            let trHide = document.createElement('tr')
            trHide.className = 'hide'

            let tdYear = create('td', `Year: ${Number(year.value)}`)
            let tdSpan = create('td', `Description: ${description.value}`)
            tdSpan.ariaColSpan = 3

            trHide.appendChild(tdYear)
            trHide.appendChild(tdSpan)
            
            furnitureList.appendChild(trInfo)
            furnitureList.appendChild(trHide)
            model.value = ''
            description.value = ''
            price.value = ''
            year.value = ''

            buyBtn.addEventListener('click', onBuy)
            moreBtn.addEventListener('click', moreInfo)
        }
        
    }

    function onBuy(e){
        e.preventDefault()
        let price = Number(e.target.parentElement.parentElement.children[1].textContent)
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2)
        while (furnitureList.firstChild){
            furnitureList.removeChild(furnitureList.firstChild)
        }
    }

    function moreInfo(e){
        e.preventDefault()
        if (e.target.textContent === 'More Info'){
            e.target.textContent = 'Less Info'
            e.target.parentElement.parentElement.parentElement.children[1].style.display = 'contents'
        }else{
            e.target.textContent = 'More Info'
            e.target.parentElement.parentElement.parentElement.children[1].style.display = 'none'
        }
    }
   
}
