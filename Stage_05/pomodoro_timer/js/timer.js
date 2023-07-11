import Sounds from "./sounds.js"

export default function({
    secondsDisplay,
    minutesDisplay
}) {

    let countdownTimeout

    function countdown() {
        countdownTimeout = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            if (seconds == 0 && minutes == 0) {
                Sounds().timesUp()

                minutesDisplay.textContent = 25
                return
            }
    
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000)
    }

    function pause() {
        clearTimeout(countdownTimeout)
    }

    function plusFiveMinutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        updateDisplay(String(minutes + 5), seconds)
    }

    function minusFiveMinutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
    
        minutes -= 5
    
        if (minutes <= 0) {
            minutes = 0
            seconds = 0
        }
    
        updateDisplay(minutes, seconds)
    }

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    return {
        countdown,
        pause,
        plusFiveMinutes,
        minusFiveMinutes
    }
}