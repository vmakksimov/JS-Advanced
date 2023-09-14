function lockedProfile() {

    let button = document.getElementsByTagName('button')
    let firstButton = button[0].addEventListener('click', onClick)
    let secondButton = button[1].addEventListener('click', onClick)
    let thirdButton = button[2].addEventListener('click', onClick)
    
    

    function onClick (e){
        let isLocked = e.target.parentElement.children[2].checked
        let additionalInfo = e.target.parentElement.children[9]
        let currentButton = e.target

        if (currentButton.textContent === 'Show more' && !isLocked){
            additionalInfo.style.display = 'block'
            currentButton.textContent = 'Hide it'

        }else if (currentButton.textContent === 'Hide it' && !isLocked){
            additionalInfo.style.display = 'none'
            currentButton.textContent = 'Show more'
        }

   
        

    }
}