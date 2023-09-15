function solve() {
  let div = document.getElementById('exercise')
  let textArea = div.children[1]
  let generateButton = div.children[2].addEventListener('click', onGenerate)
  let table = document.querySelector('.table tbody')


  function onGenerate(e){
      let input = JSON.parse(textArea.value)


      for (let i =0; i < input.length; i++){
        let tr = document.createElement('tr')
        let entries = Object.entries(input[i])
        for ([key, value] of entries){
          let td = document.createElement('td')
          td.textContent = value
          tr.appendChild(td)
        }
        
        table.appendChild(tr)
      }
     

     
      


  }


  
  //TODO...
}