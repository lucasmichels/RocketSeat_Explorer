import {
    forestButton,
    rainButton,
    coffeeButton,
    fireButton,
    forestCard,
    rainCard,
    coffeeCard,
    fireCard,
    playButton,
    stopButton,
    plusButton,
    minusButton,
    forestVolume,
    rainVolume,
    coffeeVolume,
    fireVolume,
    lightThemeButton,
    darkThemeButton,
} from './elements.js'

export default function({controls, sounds, timer, themes}) {
    forestButton.addEventListener('click', function(){
        controls.toggleSelectedCard(forestCard)
        sounds.playAudio(sounds.forestAudio, forestCard)
    })

    forestVolume.addEventListener('input', function(){
        sounds.adjustVolume(sounds.forestAudio, forestVolume.value)
    })
    
    rainButton.addEventListener('click', function(){
        controls.toggleSelectedCard(rainCard)
        sounds.playAudio(sounds.rainAudio, rainCard)
    })

    rainVolume.addEventListener('input', function(){
        sounds.adjustVolume(sounds.rainAudio, rainVolume.value)
    })
    
    coffeeButton.addEventListener('click', function(){
        controls.toggleSelectedCard(coffeeCard)
        sounds.playAudio(sounds.coffeeAudio, coffeeCard)
    })

    coffeeVolume.addEventListener('input', function(){
        sounds.adjustVolume(sounds.coffeeAudio, coffeeVolume.value)
    })
    
    fireButton.addEventListener('click', function(){
        controls.toggleSelectedCard(fireCard)
        sounds.playAudio(sounds.fireAudio, fireCard)
    })

    fireVolume.addEventListener('input', function(){
        sounds.adjustVolume(sounds.fireAudio, fireVolume.value)
    })

    playButton.addEventListener('click', function(){
        timer.countdown()
        sounds.buttonPressSound()
    })

    stopButton.addEventListener('click', function(){
        timer.pause()
        sounds.buttonPressSound()
    })

    plusButton.addEventListener('click', function(){
        timer.plusFiveMinutes()
        sounds.buttonPressSound()
    })

    minusButton.addEventListener('click', function(){
        timer.minusFiveMinutes()
        sounds.buttonPressSound()
    })

    darkThemeButton.addEventListener('click', function(){
        themes.toggleTheme()
    })

    lightThemeButton.addEventListener('click', function(){
        themes.toggleTheme()
    })
}