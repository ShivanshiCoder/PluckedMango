class Tree{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }