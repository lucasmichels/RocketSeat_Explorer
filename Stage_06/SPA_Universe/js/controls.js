export default function({
    homeBack,
    universeBack,
    explorationBack,
    homeButton,
    universeButton,
    explorationButton,
}){

    function clickHome(){
        homeBack.classList.remove('hide')
        universeBack.classList.add('hide')
        explorationBack.classList.add('hide')

        homeButton.classList.add('selected')
        universeButton.classList.remove('selected')
        explorationButton.classList.remove('selected')
    }

    function clickUniverse(){
        homeBack.classList.add('hide')
        universeBack.classList.remove('hide')
        explorationBack.classList.add('hide')

        homeButton.classList.remove('selected')
        universeButton.classList.add('selected')
        explorationButton.classList.remove('selected')
    }

    function clickExploration(){
        homeBack.classList.add('hide')
        universeBack.classList.add('hide')
        explorationBack.classList.remove('hide')

        homeButton.classList.remove('selected')
        universeButton.classList.remove('selected')
        explorationButton.classList.add('selected')
    }

    return {
        clickHome,
        clickUniverse,
        clickExploration
    }
}