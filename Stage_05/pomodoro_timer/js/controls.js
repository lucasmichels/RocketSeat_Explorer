export default function Controls({
    forestButton,
    rainButton,
    coffeeButton,
    fireButton
}){

    function toggleSelectedCard(card){
        card.classList.toggle('selected')
    }

    function resetSoundButtons(){
        forestButton.classList.remove('selected')
        rainButton.classList.remove('selected')
        coffeeButton.classList.remove('selected')
        fireButton.classList.remove('selected')
    }

    return {
        toggleSelectedCard,
        resetSoundButtons
    }
}