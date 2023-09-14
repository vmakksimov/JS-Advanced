function addItem() {
    let itemText= document.getElementById('newItemText')
    let itemValue= document.getElementById('newItemValue')
    let menu = document.getElementById('menu')

    let option = document.createElement('option')

    option.textContent = itemText.value
    option.value = itemValue.value

    if (itemText.value.length !== 0 && itemValue.value.length !==0){
        menu.appendChild(option)

        itemText.value = ''
        itemValue.value = ''
    }

   


}