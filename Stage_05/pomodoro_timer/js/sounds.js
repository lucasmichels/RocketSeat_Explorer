export default function(){
    const forestAudio = new Audio("./assets/floresta.wav")
    const rainAudio = new Audio("./assets/chuva.wav")
    const coffeeAudio = new Audio("./assets/cafeteria.wav")
    const fireAudio = new Audio("./assets/lareira.wav")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function playAudio(audio, card){
        audio.loop = true
        let isActive = card.classList.contains('selected')
        isActive === false ? audio.pause() : audio.play()
    }

    function buttonPressSound() {
        buttonPressAudio.play()
    }

    function timesUp() {
        kitchenTimer.play()
    }

    function adjustVolume(sound, volume){
        sound.volume = volume
    }

    return {
        playAudio,
        forestAudio,
        rainAudio,
        coffeeAudio,
        fireAudio,
        buttonPressSound,
        timesUp,
        adjustVolume
    }
}

