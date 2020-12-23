class Box{
  constructor(x,y,width,height){
      var box_option={
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body=Bodies.rectangle(x,y,width,height,box_option);
      World.add(world,this.body);
      this.w=width;
      this.h=height;
  }
  display(){
    if(this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4); 
        stroke("white");
        fill("black");
        rect(0,0,this.w,this.h);
        pop();
    }else{
        World.remove(world,this.body);
    }
  }
}