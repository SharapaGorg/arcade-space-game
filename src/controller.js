window.space = window.space || {}

let movingRight = false
let movingLeft = false

document.addEventListener('keydown', (event) => {
    let starShip = window.space.starShip
    let step = 75

    switch (event.keyCode) {
        case 37:
            // left
            movingLeft = true

            break
        case 39:
            // right
            movingRight = true

            break
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37:
            // left
            movingLeft = false
            break

        case 39:
            // right
            movingRight = false
            break
    }
})

const step = 8

setInterval(() => {
    let starShip = window.space.starShip

    if (movingRight) {
        starShip.move(starShip.x + step)
    }

    if (movingLeft) {
        starShip.move(starShip.x - step)
    }
}, 1)