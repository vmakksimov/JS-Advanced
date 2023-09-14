function attachEventsListeners() {

    let options = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    

    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn')
    let minutesBtn = document.getElementById('minutesBtn')
    let secondsBtn = document.getElementById('secondsBtn')

    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds= document.getElementById('seconds')

    daysBtn.addEventListener('click', onClick)
    hoursBtn.addEventListener('click', onClick)
    minutesBtn.addEventListener('click', onClick)
    secondsBtn.addEventListener('click', onClick)

    function convert(value, unit){
        let days = value / rotations[unit]
             
        return {
            days: days,
            hours: days*rotations.hours,
            minutes: days*rotations.minutes,
            seconds: days*rotations.seconds
        }
    }

    function onClick (e){
        let input = e.target.parentElement.querySelector('input[type="text"]')
        let time = convert(Number(input.value), input.id)
        days.value = time.days
        hours.value = time.hours
        minutes.value = time.minutes
        seconds.value = time.seconds
          
    }


}