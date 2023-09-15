function solve() {
    let div = document.getElementById('exercise')
    let textArea = div.children[1]
    div.children[2].addEventListener('click', onGenerate)
    let table = document.querySelector('.table tbody')
    let buyButton = document.querySelectorAll('#exercise button')[1].addEventListener('click', finalButton)
    let buyArea = document.querySelectorAll('#exercise textarea')[1]
  
   

    function onGenerate(e) {
        let input = JSON.parse(textArea.value)
        for (value of input) {
            table.innerHTML += ` <tr>
          <td><img src="${value.img}"></td>
          <td><p>${value.name}</p></td>
          <td><p>${value.price}</p></td>
          <td><p>${value.decFactor}</p></td>
          <td><input type="checkbox"/></td> </tr>`

        }
    }

    function finalButton(e) {
        let elementName = []
        let elementPrice = []
        let elementFactor = []
       document.querySelectorAll('input[type=checkbox]').forEach(el => {
        if (el.checked){
            elementName.push(el.parentElement.parentElement.children[1].textContent)
            elementPrice.push(Number(el.parentElement.parentElement.children[2].textContent))
            elementFactor.push(Number(el.parentElement.parentElement.children[3].textContent))
        }
       })


       let totalPrice = 0
       let avgFac = 0
       elementFactor.map(e => avgFac += e)
       elementPrice.map(e => totalPrice += e)
       buyArea.value = `Bought furniture: ${elementName.join(', ')}\nTotal Price: ${totalPrice.toFixed(2)}\n"Average decoration factor: ${avgFac / 2}`
    }


}