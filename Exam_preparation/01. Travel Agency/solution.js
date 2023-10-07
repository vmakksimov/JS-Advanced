window.addEventListener('load', solution);

function solution() {

  let name = document.getElementById('fname')
  let email = document.getElementById('email')
  let phone = document.getElementById('phone')
  let address = document.getElementById('address')
  let postalcode = document.getElementById('code')
  let infoPreview = document.getElementById('infoPreview')
  let divForm = document.getElementById('form')
  let editBTN = document.getElementById('editBTN')
  let continueBTN = document.getElementById('continueBTN')

  editBTN.addEventListener('click', onEdit)

  let submitBTN = document.getElementById('submitBTN')
  submitBTN.addEventListener('click', onSubmit)

  continueBTN.addEventListener('click', onContinue)

  function onSubmit(e) {

    if (name.value !== '' && email.value !== '') {
      for (let i = 0; i < divForm.childNodes.length - 2; i++) {
        if (divForm.childNodes[i].nodeType === 1) {
          let li = document.createElement('li')
          li.textContent = `${divForm.childNodes[i].children[0].textContent} ${divForm.childNodes[i].children[1].value}`
          infoPreview.appendChild(li)
        }
      }
      name.value = ''
      email.value = ''
      phone.value = ''
      address.value = ''
      postalcode.value = ''
      submitBTN.disabled = true
      editBTN.disabled = false
      continueBTN.disabled = false

    }
  }

  function onEdit(e) {
    for (let i = 0; i < infoPreview.children.length; i++) {
      let data = infoPreview.children[i].textContent.split(': ')
      let valueForInput = data[1]
      for (let y = 0; y <= 4; y++) {
        if (i === y) {
          divForm.children[y].children[1].value = valueForInput
        }
      }
    }

    while (infoPreview.firstChild) {
      infoPreview.removeChild(infoPreview.lastChild)
    }
    submitBTN.disabled = false
    continueBTN.disabled = true
    editBTN.disabled = true
  }

  function onContinue(e){
    let globalDiv = document.getElementById('block')

    while(globalDiv.firstChild){
      globalDiv.removeChild(globalDiv.lastChild)
    }

    let h3 = document.createElement('h3')
    h3.textContent = 'Thank you for your reservation'

    globalDiv.appendChild(h3)
  }



}
