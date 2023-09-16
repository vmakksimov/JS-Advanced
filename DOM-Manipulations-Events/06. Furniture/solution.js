function solve() {
    let div = document.getElementById('exercise')
    let textArea = div.children[1]
    let table = document.querySelector('.table tbody')
    let buttons = document.querySelectorAll('#exercise button')
    const generateButton = buttons[0]
    generateButton.addEventListener('click', onGenerate)

    let textField = document.querySelectorAll('#exercise textarea')
    let buyArea = textField[1]

    function onGenerate(e) {
        let input = JSON.parse(textArea.value)
        input.forEach(value => {
            table.innerHTML += ` <tr>
            <td><img src="${value.img}"></td>
            <td><p>${value.name}</p></td>
            <td><p>${value.price}</p></td>
            <td><p>${value.decFactor}</p></td>
            <td><input type="checkbox"/></td> </tr>`
        })

    }
    const buybutton = buttons[1]
    buybutton.addEventListener('click', finalButton)

    function finalButton() {
        let checking = [...document.querySelectorAll('input:checked')]
        let names = []
        let price = 0
        let factor = 0
        checking.forEach(element => {
            console.log(element.parentNode)
            console.log(element.parentElement)
            let name = element.parentNode.parentNode.children[1].textContent
            names.push(name)
            let price2 = Number(element.parentNode.parentNode.children[2].textContent)
            price += price2
            let factor3 = Number(element.parentNode.parentNode.children[3].textContent)
            factor += factor3

        });
    
        buyArea.innerHTML += `Bought furniture: ${names.join(', ')}\n`
        buyArea.innerHTML += `Total price: ${price.toFixed(2)}\n`
        buyArea.innerHTML += `Average decoration factor: ${factor / names.length}`
    }
}