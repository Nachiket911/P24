class Paper{

    constructor(){

        var options = {

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }

        this.body = Bodies.circle(700,600,20,options);
        World.add(world,this.body);

    }

    display(){

        push(); 

        ellipseMode(CENTER);

        fill(0,255,0);
        stroke("white"); 
        strokeWeight(1);

        ellipse(30, 645, 30, 30);

        pop();

      }

}
