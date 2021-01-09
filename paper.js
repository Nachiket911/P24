class Paper{

    constructor(x,y,r){

        var options = {

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
    
        this.body = Bodies.circle(x, y, r ,options);
        World.add(world,this.body);

        //x = this.body.x;
        //y = this.body.y;
        this.r = r;
        this.x = x;
        this.y = y;

    }  

    display(){

        push(); 
        translate(this.body.position.x, this.body.position.y)

        ellipseMode(CENTER);

        fill(0,255,0);
        stroke("white"); 
        strokeWeight(1);

        ellipse(0, 0, this.r, this.r);

        pop();

      }

} 