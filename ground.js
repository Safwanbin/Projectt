class Ground{
    constructor(x,y,w,h){

        this.x=this.x
        this.y=this.y
        this.w=this.w
        this.h=this.h

 var options={
    isStatic:true
 }
 this.body=Bodies.rectangle(x,y,w,h,options)

 display() 
 {
 rectMode(CENTER)
 fill(127)

 rect(this.position.x,this.position.y,this.w,this.h)
 }
 }}
