class Paper{

    constructor(){

        var options = {

            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.body = Bodies.circle(20,20,20,options);
        World.add(world,this.body);

    }

    display(){

        push(); 

        ellipseMode(CENTER);

        fill(0,255,0);
        stroke("white"); 
        strokeWeight(3);

        ellipse(30, 30, 30, 30);

        pop();

      }

}