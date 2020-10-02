class Box{
    constructor(x,y,width,height){
        var options = {
        restitution:1
        
        }
        this.Visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<3){
        display();
    
      }
      else{
        World.remove(world,this.body);
        
    push ();
    translate(pos.x , pos.y);
    rotate(angle);
    this.Visibility = this.Visibility-5
    rectMode(CENTER);
    tint (0, 150, 200);
    rect(0 , 0 , this.width, this.height);
    pop ();
      }
    }
}