class Drops{
    constructor(x,y){
        var options = {
            'restitution' :0.1,
            'friction':0.001,
            'isStatic':false
        }
        this.drop = Bodies.circle(x,y,3,options);
        World.add(world,this.drop);
        this.radius = 5;
        
    }

    display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.drop.position.x,this.drop.position.y,3,3);
    }

    updateY(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,200)});
        }
    }
}