class Paper {

    constructor(x, y, w, h) {

        var options = {
            isSatic: false,
            restitution: 0.3, 
            friction: 0.5, 
            density: 1.2
        }

        this.body = Bodies.circle(this.x, this.y, 5, this.r/2), options

        this.x = 10;
        this.y = 10;
        this.w = this.width; 
        this.h = this.height; 
        
        World.add(world, this.body);
    }

    display() {
        var ppos = this.body.position; 

        push()
        translate(ppos.x, ppos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(237, 239, 242); 
        ellipse(0,0, this.r, this.r)
        pop()

    }

}