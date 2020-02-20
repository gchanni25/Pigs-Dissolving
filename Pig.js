class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visible = 255;

    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    console.log(this.body.speed);
    if (this.body.speed > 3) {
      World.remove(world,this.body);
      push();
      this.visible = this.visible - 5;
      tint(255, this.visible);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
    else {
    super.display();
    }
  }
};