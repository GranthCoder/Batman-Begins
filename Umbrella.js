class  Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.umb = Bodies.circle(x,y,110,options);
        World.add(world,this.umb);

        this.image = loadImage("proc41images/images/Walking Frame/walking_1.png");
    }

    display(){
        var pos = this.umb.position;
        imageMode(CENTER);

        image(this.image,pos.x,pos.y,300,300);
    }
}