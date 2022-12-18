class Ball{
    constructor(x, y, radius){

        this.x=this.x
        this.y=this.y
        this.radius=this.radius

 var options={
    isStatic:true,
    restitution:0.2,
    density:1.2,
    friction:0
 }

 this.body=Bodies.circle(x,y,radius,options)

 display() 
 {
 ellpiseMode(RADIUS)
 fill("yellow")

 ellpise(this.position.x,this.position.y,this.radius)
 }
 }}