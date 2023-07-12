import {
    homeButton,
    universeButton,
    explorationButton,
} from './elements.js'

export default function({controls}){
    homeButton.addEventListener('click', function(){
        controls.clickHome()
    })
    
    universeButton.addEventListener('click', function(){
        controls.clickUniverse()
    })
    
    explorationButton.addEventListener('click', function(){
        controls.clickExploration()
    })
}