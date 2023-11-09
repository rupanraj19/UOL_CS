//scene variables
var clouds, mountains, trees_x;


function setupScene(){
    
        
    mountains =[{pos_x:280,pos_y:floorPos_y-125,height:250,width:200},
                {pos_x:80,pos_y:floorPos_y-175,height:350,width:200},
                {pos_x:200,pos_y:floorPos_y-151,height:300,width:200},
                {pos_x:1080,pos_y:floorPos_y-125,height:250,width:200},
                {pos_x:880,pos_y:floorPos_y-175,height:350,width:200},
                {pos_x:1000,pos_y:floorPos_y-150,height:300,width:200}];


    trees_x =[{pos_x:width-1100,pos_y:floorPos_y-50},
              {pos_x:width-900,pos_y:floorPos_y-50},
              {pos_x:width-700,pos_y:floorPos_y-50},
              {pos_x:width-300,pos_y:floorPos_y-50},
              {pos_x:width-100,pos_y:floorPos_y-50}];


    clouds=[{pos_x:random(10,width),pos_y:random(20,100),size:random(45,80)}, 
            {pos_x:random(15,width),pos_y:random(100,200),size:random(45,80)}, 
            {pos_x:random(20,width),pos_y:random(200,250),size:random(45,80)}, 
            {pos_x:random(20,width),pos_y:random(250,300),size:random(45,80)},
			{pos_x:random(20,width),pos_y:random(5,50),size:random(45,80)}, 
            {pos_x:random(20,width),pos_y:random(150,200),size:random(45,80)}];											

}	

//clouds
function floatingClouds(){
	for (var i=0; i < clouds.length;i++){
	 clouds[i].pos_x += 1;
	}
 
}
 
function drawClouds(){
	for (var i=0;i < clouds.length;i++){
	
		fill("#DFF6FF");
		ellipse(clouds[i].pos_x,clouds[i].pos_y,clouds[i].size*1.4,clouds[i].size*1.4);
		ellipse(clouds[i].pos_x-45,clouds[i].pos_y,clouds[i].size,clouds[i].size);
		ellipse(clouds[i].pos_x+45,clouds[i].pos_y,clouds[i].size,clouds[i].size);
		//alpha
		fill("#DFF6FF")
		ellipse(clouds[i].pos_x,clouds[i].pos_y,clouds[i].size*1.4,clouds[i].size*1.4);
		ellipse(clouds.pos_x-45,clouds.pos_y,clouds.size,clouds[i].size);
		ellipse(clouds[i].pos_x+45,clouds[i].pos_y,clouds[i].size,clouds[i].size);
        //anchor point
        // fill(255,0,0);
        // ellipse(clouds[i].pos_x,clouds[i].pos_y,10,10);
    }
}
//ground
function drawGround(){
	noStroke();
    image(ground,0,floorPos_y, width, height/12);
	// fill("black");
	// rect(0,floorPos_y, width, height/2);
	fill("#4D4C7D");
	rect(0, floorPos_y+48, width, height);
	
	
}
//mountains
function drawMountains(){
   
	for(var i=0; i<mountains.length;i++){
		var x1 = mountains[i].pos_x - mountains[i].width/2;
		var y1 = mountains[i].pos_y + mountains[i].height/2;
		var x2 = mountains[i].pos_x;
		var y2 = mountains[i].pos_y - mountains[i].height/2;
		var x3 = mountains[i].pos_x + mountains[i].width/2;
		var y3 = mountains[i].pos_y + mountains[i].height/2;
		fill(60,71,124);
		triangle(x1, y1, x2, y2, x3, y3);
		//peak
		var x1 = mountains[i].pos_x - mountains[i].width/8;
		var y1 = mountains[i].pos_y + mountains[i].height/8;
		var x2 = mountains[i].pos_x;
		var y2 = mountains[i].pos_y - mountains[i].height/2;
		var x3 = mountains[i].pos_x + mountains[i].width/3;
		var y3 = mountains[i].pos_y + mountains[i].height/3;
		fill(118,129,214);
		triangle(x1-10, y1, x2, y2, x3, y3);

        // anchor point
        // fill(255,0,0);
        // ellipse(mountains[i].pos_x,mountains[i].pos_y,10,10);
	}
}
 //trees
function drawTrees(){

	//for loop get array of trees_x to place in drawTree function as a parameters.
	for(var i=0;i < trees_x.length;i++){
		//tree trunk
		noStroke();
		fill(135, 76, 98);
		rectMode(CENTER);
		rect(trees_x[i].pos_x,trees_x[i].pos_y,40,100);
		rectMode(CORNER);//setback to default mode
		//tree leaves
		fill(35, 144, 79);
		var x1 =trees_x[i].pos_x;
		var y1 =trees_x[i].pos_y-140;
		ellipse(x1,y1,120,200);
		fill(71, 218, 116,50);
		ellipse(x1-18,y1,90,10);
		ellipse(x1+18,y1+20,90,10);
		ellipse(x1+1,y1+60,90,10);
		ellipse(x1+1,y1-60,90,10);
		// bush
		fill("#069A8E");
		ellipse(x1+135,y1+165,50,50);
		ellipse(x1+115,y1+160,60,60);
		ellipse(x1+95,y1+170,40,40);
        //anchor point
        // fill(255,0,0);
        // ellipse(trees_x[i].pos_x,trees_x[i].pos_y,10,10);
	} 
}
	