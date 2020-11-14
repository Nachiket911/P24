class Ground{

    constructor(){

        this.body1 = Bodies.rectangle(400, 200, 20, 20, {isStatic:false});
        World.add(world, this.body1);    
       
    }

    display(){

        push();

        var boxSprite1 = createSprite(width/2,670,width,20);
        boxSprite1.shapeColor = rgb(255,255,255);
                          
        pop();

    }

}