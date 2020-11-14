class Dustbin{

    constructor(){

        this.body1 = Bodies.rectangle(400, 200, 20, 20, {isStatic:false, 
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2});
        World.add(world, this.body1);
         
        this.body2 = Bodies.rectangle(200, 200, 20, 20, {isStatic:false,
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2}); 
	    World.add(world, this.body2);

	    this.body3 = Bodies.rectangle(200, 200, 20, 20, {isStatic:false,
                                                         restitution:0.3, 
                                                         friction:0.5, 
                                                         density:1.2}); 
        World.add(world, this.body3);

    }

    appear(){

        push();

        var boxSprite1 = createSprite(700,650,200,20);
        boxSprite1.shapeColor =rgb(255,0,0);
    
        var boxSprite2 = createSprite(600,560,20,200);
        boxSprite2.shapeColor = rgb(255,0,0); 
    
        var boxSprite3 = createSprite(800,560,20,200);
        boxSprite3.shapeColor = rgb(255,0,0);
               
        pop();

    }

}