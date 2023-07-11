import Controls from './controls.js'
import Sounds from './sounds.js'
import Events from './events.js'
import Timer from './timer.js'
import Themes from './themes.js'
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
    minutesDisplay,
    secondsDisplay,
    lightThemeButton,
    darkThemeButton,
    page
} from './elements.js'

const controls = Controls({
    forestButton,
    rainButton,
    coffeeButton,
    fireButton,
})

const timer = Timer({
    secondsDisplay,
    minutesDisplay
})

const themes = Themes({
    forestCard,
    rainCard,
    coffeeCard,
    fireCard,
    playButton,
    stopButton,
    plusButton,
    minusButton,
    lightThemeButton,
    darkThemeButton,
    page
})

const sounds = Sounds()

Events({controls, sounds, timer, themes})