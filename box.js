class Box{
    constructor(x,y){  
         var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
         }     
         this.body=Bodies.rectangle(x,y,60,60,options)
        this.height=70
        this.width=70
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER) 
        strokeWeight(4); 
        stroke("red"); 
        fill("green");
        rect(0,0,this.width,this.height);
    }




}