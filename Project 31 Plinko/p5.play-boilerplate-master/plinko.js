class Plinko{
    constructor(x,y,radius){
        var option = {
            isStatic: true
        }

        this.plinko = Bodies.circle(x,y,radius)
        this.radius = radius
        World.add(world,this.plinko)
    }

    display(){
        var pos = this.plinko.position
        fill("white")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}