class Ground{

    constructor(posX, posY, x, y){

        this.body1 = Bodies.rectangle(posX, posY, x, y, {isStatic:true});
        World.add(world, this.body1);    
       
        this.posX = posX;
        this.posY = posY;
        this.x = x;
        this.y = y;

    }

    display(){

        push();

           rectMode(CENTER);
           rect(this.posX, this.posY, this.x, this.y);

        pop();

    }

}