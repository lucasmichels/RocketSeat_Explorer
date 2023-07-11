export default function({
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
}) {
    function toggleTheme() {
        page.classList.toggle('dark')

        playButton.classList.toggle('dark')
        stopButton.classList.toggle('dark')
        plusButton.classList.toggle('dark')
        minusButton.classList.toggle('dark')

        forestCard.classList.toggle('dark')
        rainCard.classList.toggle('dark')
        coffeeCard.classList.toggle('dark')
        fireCard.classList.toggle('dark')

        darkThemeButton.classList.toggle('hide')
        lightThemeButton.classList.toggle('hide')
    }

    return {
        toggleTheme
    }
}