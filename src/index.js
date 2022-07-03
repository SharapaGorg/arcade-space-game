window.space = window.space || {}

class starShip {
    constructor(x, width, height) {
        this.object = document.getElementById("starShip")
        window.space.starShip = this

        // INIT
        this.x = x
        this.width = width
        this.height = height
    }

    move(x) {
        if (x < 0 || x > screen.width - this.width) {
            return
        }

        this.object.style.transform = `translateX(${x}px)`
        this.x = x
    }
}

engine = new starShip(0, 200, 200)