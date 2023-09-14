function lockedProfile() {

    Array.from(document.getElementsByTagName('button')).forEach(el => {
        el.addEventListener('click', onClick)
    })
   
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