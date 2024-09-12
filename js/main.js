'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var currWidth = elBall.offsetWidth
    var currHeight = elBall.offsetHeight

    if (currWidth >= 400) {
        currWidth = 50
        currHeight = 50
    }
    elBall.style.width = `${currWidth + 50}px`
    elBall.style.height = `${currHeight + 50}px`
    
    elBall.innerText = currWidth + 50
}