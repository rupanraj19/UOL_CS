/*

reference: 
sound: Freesound [https://freesound.org/]
enemy and  flag: Nicepng [https://www.nicepng.com/ourpic/u2w7w7i1q8y3u2e6_2d-enemy-sprite/]
background image: Edited in canva.

*/

//variables
var floorPos_y, gameChar_x, gameChar_y, robo_width;

//robo control variables
var isFalling, isLeft, isPlummeting, isRight;

//game screen
var game_score, lives, flagpole;

//scrolling variables 
var cameraPosX;
var gameChar_world_x

//background
var bg1, bg2 , ground, flag, saw;

//sound
var win, jumpSound, game, fall, coin;

//platforms & enemies
var platforms , enemies, sword;

//win sound variable
var winSoundHasPlayed;

//game screen
var char;

function preload()
{
    soundFormats('mp3','wav');
    
    //load your sounds here
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);
    game = loadSound('assets/game.mp3');
    game.setVolume(0.3);
    fall = loadSound('assets/drown.mp3');
    fall.setVolume(0.5);
    coin = loadSound('assets/coin.wav');
    coin.setVolume(0.1);
    win = loadSound('assets/win.wav');
    win.setVolume(0.1);
    damage = loadSound('assets/enemy.mp3');
    damage.setVolume(0.7);
    
    //images
    bg1 = loadImage('assets/day2.png');
    bg2 = loadImage('assets/night.jpg');
    ground = loadImage('assets/road.jpg');
    flag = loadImage('assets/flag.png');
    enemy = loadImage('assets/enemy.png');
    saw = loadImage('assets/saw_blade.png');
}


function setup()
{
	createCanvas(1024, 576);

    floorPos_y = height * 3/4;
   
   
    lives = 3;
     
    char = 0;

    startGame();

}


function draw()
{
    if(char == 0 ){
        chooseRobo();
    }
    else{
    
	background(bg1);//fill the 
    //ground
    drawGround();
 
  

	push();
    translate(-cameraPosX,0);
	
	//clouds
 	floatingClouds();
	drawClouds();

    //mountain
    drawMountains();
    
	//tree    
	drawTrees();
	
    //canyon
    drawCanyons();

    //coins
    // drawCoins();
    drawcoins();
    checkcoins();


    //flagpole
	renderFlagpole();


    //checkflagpole
	checkFlagpole();

    //platforms
    // createPlatforms();
    for(var i = 0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
    //enemies
    for(var i =0 ; i<enemies.length; i++){
        enemies[i].draw();
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);

        if(isContact){
            if(lives > 0 && sword == false){
                lives --;
                startGame();
                break;
            }
            if(sword == true){
                damage.play();
                enemies[i].isAlive = false;
            }
        }

        
    }

    // This draws coins items and creates a spin animation.
	for (var i = 0; i < coins.length; i++) {
       drawcoins(coins[i].x_pos,coins[i].y_pos,coins[i].size,coins[i].isFound,coins[i].spin)

		//This is the coin spin
		    if (coins[i].spinActive == 'yes') {
		        coins[i].spin += 3;
		        if (coins[i].spin >= 200) {
		            coins[i].spinActive = 'no';
		        }
		    }
		    if (coins[i].spinActive == 'no') {
		        coins[i].spin -= 3;
		        if (coins[i].spin <= 0) {
		            coins[i].spinActive = 'yes';
		        }
		    }
		}

        
	//player die
	checkPlayerDie();
	pop();
  

	//screen & character
   	Gamescreen();
    drawRobo(char);

    //weapon
    weapon();

 

    cameraPosX = gameChar_world_x - width/2;
    
    }
   
}


function chooseRobo() {
    textSize(30);
    push();
    translate(-250, -100);
    robo1();
    pop();
    push();
    translate(250, -100);
    robo2();
    pop();
    var welcomeText = "Click on the character to choose one.";
    var instructionText = "Arrows to move < > and space to jump"
    stroke(0);
  
    text(welcomeText, (width - textWidth(welcomeText)) / 2, height * 0.3);
    text("Instructions:", 260, height - 50)
    text(instructionText,(width - textWidth(instructionText))/ 2, height - 10 );
    pop();
  }
  




function Gamescreen(){
    
    //draw screen for game score
	fill("green");
	textSize (30);
    textFont("Georgia")
	text("Game score: " + game_score,20,25);

    //draw lives screen
    for(var i=0; i<lives; i++){
        fill("red");
        noStroke();
        text("Lives:  ",860,25);
        noStroke();
        fill(234, 4, 126);
        arc(i*25 + 950, 20, 22.5, 22.5, PI, PI + QUARTER_PI);
        arc(i*25 + 950, 20, 22.5, 22.5, PI + QUARTER_PI, TWO_PI);
        stroke(0);
        line(i*25+957,11, i*25+957,4);
        ellipse(i*25+ 957,5,2.5,2.5);
        fill("#19C7E6");
        stroke("#54B435");
        triangle(i*25 + 950,18 ,i*25 + 945, 13, i*25 + 955, 13);
}


   //to prevent from override the controls while falling down
	if(isPlummeting){
        print("isPlummeting");
        if(!fall.isPlaying())
            fall.play();
		return;
	}
	//Put conditional statements to move the game character below here
    
    if(gameChar_y < floorPos_y){
        var isContact = false;
        for(var i=0; i < platforms.length; i++)
        {
            if(platforms[i].checkContact(gameChar_world_x, gameChar_y)==true)
            {
                isContact = true;
                isFalling = false;
                break;
            }
        }
        if(isContact == false)
        {
        gameChar_y += 2.5;
        isFalling = true;
        }
    }else{
        isFalling = false;
    }
	if(isLeft == true){
        gameChar_world_x -= 5;
		
	}else if(isRight == true){
        gameChar_world_x += 5;
    }

   
   
}

 

function keyPressed()
{
	// if statements to control the animation of the character when
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	if(keyCode == 37){
		isLeft = true;
	}
    else if (keyCode == 39){
		isRight = true;
	}
	else if(keyCode == 32 && (gameChar_y <= floorPos_y)){ 
        jumpSound.play();
		if(!isFalling){
			gameChar_y -= 100;	
          
		}
        if(flagpole.isReached || (lives < 1 && game_score == 0)){
            lives= 3;
            game_score = 0;
            startGame();
           
        }

	}
    else if(keyCode == 16 && game_score > 5 ){
        if(sword == false){
            sword = true
        }else{
            sword = false;
        };
    }
     

}

function keyReleased()
{
	// if statements to control the animation of the character when
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if(keyCode == 37){
		isLeft = false;
	}else if (keyCode == 39){
		isRight =false;
	} 
	
}


function mousePressed() {
   if (mouseX >= 245 && mouseX <= 318 && mouseY >= 255 && mouseY <= 332) {
      // check selected first character
      char = 1;
      startGame();
      
    } else if (mouseX >= 744 && mouseX <= 778 && mouseY >= 260 && mouseY <= 331) {
      // check selected second character
      char = 2;
      startGame();
    }
}
  
function mouseMoved() {
    cursor(ARROW);
    // change cursor to hand when clicking events are active
    if (
      char != 0 &&
      mouseX >= width * 0.85 &&
      mouseX <= width * 0.85 + 25 &&
      mouseY >= height * 0.05 - 20 &&
      mouseY <= height * 0.05 + 20
    ) {
      cursor(HAND);
    } else if (
      char == 0 &&
      ((mouseX >= 245 && mouseX <= 318 && mouseY >= 255 && mouseY <= 332) ||
        (mouseX >= 744 && mouseX <= 778 && mouseY >= 260 && mouseY <= 331))
    ) {
      cursor(HAND);
    }
}
  

function renderFlagpole(){
	
	strokeWeight(5);
	stroke(100);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);

	if(flagpole.isReached){
		noStroke();
        stroke("#CB1C8D");
	    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
        image(flag,flagpole.x_pos, floorPos_y - 250, 50,50);
        noStroke();
		
		
	}else{
		noStroke();
		fill(255,0,255);
        image(flag,flagpole.x_pos, floorPos_y - 50, 50,50);
	}
	
}



function checkFlagpole(){
	var d =  abs(gameChar_world_x - flagpole.x_pos);
	if(d < 15){
		flagpole.isReached = true;
      
	}

    //level complete 
    if(flagpole.isReached){
        
	    fill("brown");
	    textSize(30);
	    text("Level complete. Press space to restart", cameraPosX + 350, height * 0.3);       
	    isLeft = false;
	    isRight = false;
        game.stop();

        if(!winSoundHasPlayed){
            win.play();
            winSoundHasPlayed=true;
        }
        return 
        }

}
    


function checkPlayerDie(){
	if(gameChar_y > height && lives > 0){
		lives --;
		startGame();
	}

     //game over 
    if(lives < 1){	
       
	    fill(0);
        noStroke();
	    textSize(30);
	    text(" Game over.Press space to continue ", cameraPosX + 350 , 280);
	    isLeft = false;
	    isRight = false;
        game.stop();
        return
    }
}

function weapon(){

    if(sword == true){
    image(saw, gameChar_x - 40, gameChar_y - 40, 25,25);
    image(saw, gameChar_x + 14, gameChar_y - 40, 25,25);
}
    if(game_score > 5){

        fill("red");
        noStroke();
        textSize(25)
        text("Shift to activate saw blades",10,55);

    }

}


function createPlatforms(x, y, length){
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
         fill("#FF4949");
         rect(this.x,this.y,this.length,20);
        },
        checkContact: function(gameChar_x, gameChar_y)
        {
            if(gameChar_x > this.x && gameChar_x < this.x + this.length)
            {
                var d = this.y - gameChar_y;
                if(d >= 0 && d < 5)
                {
                    return true;
                    
                }

                return false;
            }
        }
    }
    return p;
}

function Enemy(x, y, range){
    this.x = x;
    this.y = y;
    this.range = range;

    this.isAlive = true;

    this.currentx = x;
    this.inc = 1;

    this.update = function(){
        this.currentx += this.inc;
        
        if(this.currentx >= this.x + this.range){
            this.inc = -1;
        }
        else if(this.currentx < this.x){
            this.inc= 1;
        }
    }
    this.draw = function(){
        if(this.isAlive){
            this.update();
            fill(255,225,0);
            image(enemy,this.currentx-26, this.y-69,100,100)
        }
       
        // ellipse(this.currentx, this.y, 20 ,20);
    }
    this.checkContact = function(gameChar_x, gameChar_y){
        var d = dist(gameChar_x, gameChar_y, this.currentx, this.y)

        if(d<40 && this.isAlive){
            return true;
        }
        return false;
    }
}

function startGame(){
    	//setup externals
        setupCoins();
        setupCanyon();
        setupScene();
        
        //NB. We are now using the built in variables height and width
        gameChar_x = width/2;
        gameChar_y = floorPos_y;
        cameraPosX = 0;
        gameChar_world_x = gameChar_x;

        //robo's controls
        robo_width = 40;
        isLeft = false;
        isRight = false;
        isPlummeting = false;
        isFalling = false;
        sword = false;
        game_score = 0;

	    flagpole ={isReached: false, x_pos: 2000};


        winSoundHasPlayed=false;
        //game sound
        if(!game.isPlaying())
        game.play();

        platforms= [];
        platforms.push(createPlatforms(-50,floorPos_y - 100,105));
        platforms.push(createPlatforms(150,floorPos_y - 120,100));
        platforms.push(createPlatforms(1100,floorPos_y - 130,100));
        platforms.push(createPlatforms(330,floorPos_y - 140,100));
        platforms.push(createPlatforms(800,floorPos_y - 100,200));
        platforms.push(createPlatforms(1580,floorPos_y - 100,80));
        platforms.push(createPlatforms(1660,floorPos_y - 120,80));

        enemies = [];
        enemies.push(new Enemy(1700,floorPos_y,200));
        enemies.push(new Enemy(-100,floorPos_y-100,70));
        enemies.push(new Enemy(1000,floorPos_y,120));
}




