class Division{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.division = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.ground.position;
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,this.width,this.height);
    }
}