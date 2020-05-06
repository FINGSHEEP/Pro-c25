class Drop { 

    constructor() {
        this.x = 20 ;
        this.velocityY = 4 ; 

    }


   SpawnDrops() { 
        if(World.frameCount % 5 === 0) {
    
        
            fill(255,0,0) ; 
          var drop = createSprite(200,1,10,10) ; 
          this.x = randomNumber(0,400) ;
          this.velocityY = 4 ;    
          drop.scale = 0.5;
        }  
    }

}

