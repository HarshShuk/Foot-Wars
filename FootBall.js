class Football {
    constructor(x,y,r) {
      var options = {
		  	restitution:0.7,
			  friction:1,
        density:1.2,
        isStatic:true
      }
      this.image=loadImage("football.jpg");
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      
      World.add(world, this.body);

    }
    display(){

      
      var pos =this.body.position;
      // push();
      // translate(pos.x, pos.y);
      // rotate(this.body.angle);
      // imageMode(CENTER);
      // ellipseMode(RADIUS);
      circle(pos.x,pos.y,this.r*2)
      // image(this.image, 0, 0, this.r*2,this.r*2);
      // pop();
    }
  }