function create(input) {
   let content = document.getElementById('content')
   for (let i = 0; i < input.length; i++) {
       let div = document.createElement('div');
       let p = document.createElement('p');
       p.textContent = input[i]
       p.style.display = 'none'
       div.appendChild(p)
       div.addEventListener('click', onClick)
       content.appendChild(div)

       function onClick() {
           p.style.display = 'block'
       }
   }
}