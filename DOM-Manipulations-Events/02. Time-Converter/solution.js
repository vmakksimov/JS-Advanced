function attachEventsListeners() {


    let hours = 24
    let minutes = 1440
    let seconds = 866400

    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hours')
    let minutesBtn = document.getElementById('minutes')
    let secondsBtn = document.getElementById('seconds')


    daysBtn.addEventListener('click', onClick)

    function onClick (e){
        let days =  Number(e.target.parentElement.children[1].value)
        let current_hours = hours * days
        let current_minutes = minutes * days
        let current_seconds = seconds * days

        hoursBtn.value = current_hours
        minutesBtn.value = current_minutes
        secondsBtn.value = current_seconds


    }


}