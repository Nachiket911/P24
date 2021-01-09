class Dustbin{

    constructor(b1PosX, b2PosX, b3PosX, b13PosY, b2PosY, b13X, b13Y, b2X, b2Y){

        this.body1 = Bodies.rectangle(400, 200, 50, 10, {isStatic:false, 
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2});
        World.add(world, this.body1);
         
        this.body2 = Bodies.rectangle(200, 200, 10, 50, {isStatic:false,
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2}); 
	    World.add(world, this.body2);

	    this.body3 = Bodies.rectangle(200, 200, 50, 10, {isStatic:false,
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2}); 
        World.add(world, this.body3);

        this.b1PosX = b1PosX;
        this.b2PosX = b2PosX;
        this.b3PosX = b3PosX;
        this.b13PosY = b13PosY; 
        this.b2PosY = b2PosY;
        this.b13X = b13X; 
        this.b13Y = b13Y;
        this.b2X = b2X;
        this.b2Y = b2Y;   

    }

    appear(){

        push();

        
        rectMode(CENTER);

        fill(255,0,0);
        stroke("white"); 
        strokeWeight(1);

        rect(this.b1PosX, this.b13PosY, this.b13X, this.b13Y);
    
        rect(this.b2PosX, this.b2PosY, this.b2X, this.b2Y);

        rect(this.b3PosX, this.b13PosY, this.b13X, this.b13Y);
               
        pop();

    }

}