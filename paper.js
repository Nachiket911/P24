class Paper{

    constructor(x,y,r){

        var options = {

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }

        x = this.body.x;
        y = this.body.y;
        r = this.body.r;

        this.body = Bodies.circle(x, y, r ,options);
        World.add(world,this.body);

    }  

    display(){

        push(); 
        translate(this.x, this.y)

        ellipseMode(CENTER);

        fill(0,255,0);
        stroke("white"); 
        strokeWeight(1);

        ellipse(30, 645, 30, 30);

        pop();

      }

} 
