class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = []
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
   
    //making sure the dots only show if it is on the right hand side of the slingshot.
    if(this.body.position.x > 250 & this.body.velocity.x < 10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
      
    //For every element inside the trajectory create a smoke image. 
    for(var i = 0;i < this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }
    }
}
