const Engine = Matter.Engine ; 
      World = Matter.World ; 
      Body = Matter.Body ;

var drop ; 

function setup () {
    canvas = createCanvas(400,400) ;
    drop = new Drop(200,1,40,40) ;  
}   

function draw() { 
    background(220) ;  
    

    drop.SpawnDrops() ;

}   


