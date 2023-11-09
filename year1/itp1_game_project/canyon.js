var canyons;

function setupCanyon(){
   canyons=[{pos_x : width - 916,
   pos_y : floorPos_y,
   x2: width - 834,
   x3: width - 834,
   x4: width - 916,
   y2: floorPos_y,
   y3: floorPos_y + 150, 
   y4: floorPos_y + 150,
   height : 150,
   width : 85,  
   },

  {pos_x : width - 114,
   pos_y : floorPos_y,  
   x2: width - 34,
   x3: width - 34,
   x4: width - 114,
   y2: floorPos_y,
   y3: floorPos_y + 150, 
   y4: floorPos_y + 150,
   height : 150,
   width : 85,  
   },

   {pos_x : width + 500,
    pos_y : floorPos_y,  
    x2: width + 580,
    x3: width + 580,
    x4: width + 500,
    y2: floorPos_y,
    y3: floorPos_y + 150, 
    y4: floorPos_y + 150,
    height : 150,
    width : 85,  
    }];

    gameChar_world_x = gameChar_x - scroll;
}

function drawCanyons(){
    for(var i=0; i<canyons.length;i++){
        noStroke();
        fill("#f1c232");
        quad(canyons[i].pos_x,canyons[i].pos_y,canyons[i].x2,canyons[i].y2,canyons[i].x3,canyons[i].y3,canyons[i].x4,canyons[i].y4);
        fill("#3d85c6");
        quad(canyons[i].pos_x+20,canyons[i].pos_y,canyons[i].x2-20,canyons[i].y2,canyons[i].x3-20,canyons[i].y3,canyons[i].x4+20,canyons[i].y4);
        
        let a = gameChar_y == floorPos_y // robo is on floor
	    let b = gameChar_world_x - robo_width/2 > (canyons[i].pos_x) //robo is from left of the canyon
	    let c = gameChar_world_x + robo_width/2 < (canyons[i].pos_x + canyons[i].width) //robo is from right of the canyon
	
	if(a && b && c){
		isPlummeting = true;
	    }

    if(isPlummeting){
		gameChar_y += 2;
		
	    }
    //anchor point
    // fill(255,0,0);
    // ellipse(canyons[i].pos_x,canyons[i].pos_y,10,10);
  
    }
}