function setupCoins(){
    coins = [
        {x_pos: 300, y_pos: 290},
        {x_pos: 550, y_pos: 290},
        {x_pos: 1890, y_pos: 290},
        {x_pos: 1745, y_pos: 260},
        {x_pos: 830, y_pos: 290},

        {x_pos: 30, y_pos: 380},
        {x_pos: 35, y_pos: 290},
        {x_pos: 230, y_pos: 290},
        {x_pos: 360, y_pos: 240},
        {x_pos: 1700, y_pos: 380},

        {x_pos: 1200, y_pos: 290},
        {x_pos: 1241, y_pos: 243},
        {x_pos: 1283, y_pos: 213},
        {x_pos: 1354, y_pos: 252},
        {x_pos: 1390, y_pos: 290},
  
];

for (var i = 0; i < coins.length; i++) {
    coins[i].spin = floor(random(0,250))
    coins[i].size = 15;
    coins[i].isFound = false;
    coins[i].spinActive = 'yes'
}
}


// Function to draw coins objects.
function drawcoins(coinItemX,coinItemY,coinSize,coinFound,coinSpin){
    if (coinFound == false) {
        coinSpin = coinSpin * (coinSize/100);
        stroke(255,140,0,0);
        fill("#98c1cc");
        ellipse(coinItemX,coinItemY,coinSize/3,coinSize*2.5);
        stroke("#f2aa0f");
        fill("#e2e111");
        ellipse(coinItemX,coinItemY,(coinSize-coinSpin)*2.5,coinSize*2.5);
        fill("#c8370b");
        stroke(0,0,0,0);
        quad(coinItemX+(coinSize-coinSpin)/2.5,coinItemY,coinItemX,coinItemY-coinSize/2.5,coinItemX-(coinSize-coinSpin)/2.5,coinItemY,coinItemX,coinItemY+coinSize/2.5);

    }
}


// Function to check character has collected an item.
function checkcoins(){
	for (var i = 0; i < coins.length; i++) {
		if (dist(coins[i].x_pos,coins[i].y_pos,gameChar_world_x,gameChar_y) < 60 && coins[i].isFound == false) {
			coins[i].isFound = true;
            coin.play();
			game_score += 1;
		}
	}
}


