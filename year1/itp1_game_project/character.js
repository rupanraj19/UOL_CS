

function drawRobo(x){
    
    if(x == 1){
             //the game character (robo)
             if(isLeft && isFalling)
             {
             //jumping-left code
             //legs
             fill(0,0,0);
             stroke(10);
             line(gameChar_x - 6,gameChar_y - 19,gameChar_x - 17,gameChar_y- 9);
             line(gameChar_x - 17,gameChar_y - 9,gameChar_x - 9,gameChar_y );
             line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 9,gameChar_y  );
             fill(255,255,0);
             stroke("#001253");
             ellipse(gameChar_x - 7,gameChar_y - 1, 10,10);
             ellipse(gameChar_x + 8,gameChar_y - 1, 10,10);
             //hands
             line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
             line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
             ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
             ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
             //body
             fill(246, 172, 232);
             rect(gameChar_x -17 , gameChar_y - 48,34,30);
             fill(129, 16, 14);
             rect(gameChar_x - 14, gameChar_y - 38, 28,5);
             fill(239, 226, 108);
             ellipse(gameChar_x ,gameChar_y-35,15,15);
             //head
             fill(234, 4, 126);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
             line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
             ellipse(gameChar_x+13,gameChar_y - 72, 2.5,2.5);
             //eye
             fill(25, 199, 230);
             stroke("#54B435");
             triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
             
             }
             else if(isRight && isFalling)
             {
             //jumping-right code
             //legs
             fill(0,0,0);
             stroke(10);
             line(gameChar_x - 10,gameChar_y - 19,gameChar_x - 10,gameChar_y);
             line(gameChar_x + 8,gameChar_y - 19,gameChar_x + 17,gameChar_y -9 );
             line(gameChar_x + 17,gameChar_y - 9,gameChar_x + 5,gameChar_y);
             fill(255,255,0);
             stroke("#001253");
             ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
             ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
             //hands
             line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
             line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
             ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
             ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
             //body
             fill(246, 172, 232);
             rect(gameChar_x -17 , gameChar_y - 48,34,30);
             fill(129, 16, 14);
             rect(gameChar_x - 14, gameChar_y - 38, 28,5);
             fill(239, 226, 108);
             ellipse(gameChar_x ,gameChar_y-35,15,15);
             //head
             fill(234, 4, 126);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
             line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
             ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
             //eye
             fill(25, 199, 230);
             stroke("#54B435");
             triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
          
             }
             else if(isLeft)
             {
             //walking left code
             //legs
             fill(0,0,0);
             stroke(10);
             line(gameChar_x - 9,gameChar_y - 19,gameChar_x - 17,gameChar_y- 9);
             line(gameChar_x - 17,gameChar_y - 9,gameChar_x -9,gameChar_y );
             line(gameChar_x + 10,gameChar_y - 19,gameChar_x - 1,gameChar_y -9 );
             line(gameChar_x - 1,gameChar_y - 9,gameChar_x + 9,gameChar_y);
             fill(255,255,0);
             stroke("#001253");
             ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
             ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
             //hands
             line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
             line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
             ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
             ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
             //body
             fill(246, 172, 232);
             rect(gameChar_x -17 , gameChar_y - 48,34,30);
             fill(129, 16, 14);
             rect(gameChar_x - 14, gameChar_y - 38, 28,5);
             fill(239, 226, 108);
             ellipse(gameChar_x ,gameChar_y-35,15,15);
             //head
             fill(234, 4, 126);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
             line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
             ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
             //eye
             fill(25, 199, 230);
             stroke("#54B435");
             triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
          
             }
             else if(isRight)
             {
             //walking right code
             //legs
             fill(0,0,0);
             stroke(10);
             line(gameChar_x - 10,gameChar_y - 19,gameChar_x + 1,gameChar_y- 9);
             line(gameChar_x +1,gameChar_y - 9,gameChar_x - 9,gameChar_y );
             line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 17,gameChar_y -9 );
             line(gameChar_x + 17,gameChar_y - 9,gameChar_x + 9,gameChar_y);
             fill(255,255,0);
             stroke("#001253");
             ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
             ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
             //hands
             line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
             line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
             ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
             ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
             //body
             fill(246, 172, 232);
             rect(gameChar_x -17 , gameChar_y - 48,34,30);
             fill(129, 16, 14);
             rect(gameChar_x - 14, gameChar_y - 38, 28,5);
             fill(239, 226, 108);
             ellipse(gameChar_x ,gameChar_y-35,15,15);
             //head
             fill(234, 4, 126);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
             line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
             ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
             //eye
             fill(25, 199, 230);
             stroke("#54B435");
             triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
          
             }
             else if(isFalling || isPlummeting)
             {
             //jumping facing forwards code
             //legs
             fill(0,0,0);
             stroke(10);
             line(gameChar_x - 9,gameChar_y - 19,gameChar_x - 15,gameChar_y- 9);
             line(gameChar_x - 15,gameChar_y - 9,gameChar_x - 9,gameChar_y );
             line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 15,gameChar_y -9 );
             line(gameChar_x + 15,gameChar_y - 9,gameChar_x + 9,gameChar_y);
             fill(255,255,0);
             stroke("#001253");
             ellipse(gameChar_x - 9,gameChar_y - 1.5 , 10,10);
             ellipse(gameChar_x + 9,gameChar_y - 1.5, 10,10);
             //hands
             line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
             line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
             ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
             ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
             //body
             fill(246, 172, 232);
             rect(gameChar_x -17 , gameChar_y - 48,34,30);
             fill(129, 16, 14);
             rect(gameChar_x - 14, gameChar_y - 38, 28,5);
             fill(239, 226, 108);
             ellipse(gameChar_x ,gameChar_y-35,15,15);
             //head
             fill(234, 4, 126);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
             arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
             line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
             ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
             //eye
             fill(25, 199, 230);
             stroke("#54B435");
             triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
          
             }
             else
             {
                robo1();
             
             }
    }else if(x == 2){

       if(isLeft && isFalling)
       {
       //jumping-left code
       //legs
       fill(0,0,0);
       stroke(10);
       line(gameChar_x - 6,gameChar_y - 19,gameChar_x - 17,gameChar_y- 9);
       line(gameChar_x - 17,gameChar_y - 9,gameChar_x - 9,gameChar_y );
       line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 9,gameChar_y  );
       fill("#BFDB38");
       stroke("#001253");
       ellipse(gameChar_x - 7,gameChar_y - 1, 10,10);
       ellipse(gameChar_x + 8,gameChar_y - 1, 10,10);
       //hands
       line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
       line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
       ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
       ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
       //body
       fill("#1F8A70");
       rect(gameChar_x -17 , gameChar_y - 48,34,30);
       fill("#060047");
       rect(gameChar_x - 14, gameChar_y - 38, 28,5);
       fill("#FCE22A");
       ellipse(gameChar_x ,gameChar_y-35,15,15);
       //head
       fill("#00425A");
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
       line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
       ellipse(gameChar_x+13,gameChar_y - 72, 2.5,2.5);
       //eye
       fill("#F94A29");
       stroke("#54B435");
       triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
       
       }
       else if(isRight && isFalling)
       {
       //jumping-right code
       //legs
       fill(0,0,0);
       stroke(10);
       line(gameChar_x - 10,gameChar_y - 19,gameChar_x - 10,gameChar_y);
       line(gameChar_x + 8,gameChar_y - 19,gameChar_x + 17,gameChar_y -9 );
       line(gameChar_x + 17,gameChar_y - 9,gameChar_x + 5,gameChar_y);
       fill("#BFDB38");
       stroke("#001253");
       ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
       ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
       //hands
       line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
       line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
       ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
       ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
       //body
       fill("#1F8A70");
       rect(gameChar_x -17 , gameChar_y - 48,34,30);
       fill("#060047");
       rect(gameChar_x - 14, gameChar_y - 38, 28,5);
       fill("#FCE22A");
       ellipse(gameChar_x ,gameChar_y-35,15,15);
       //head
       fill("#00425A");
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
       line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
       ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
       //eye
       fill("#F94A29");
       stroke("#54B435");
       triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
    
       }
       else if(isLeft)
       {
       //walking left code
       //legs
       fill(0,0,0);
       stroke(10);
       line(gameChar_x - 9,gameChar_y - 19,gameChar_x - 17,gameChar_y- 9);
       line(gameChar_x - 17,gameChar_y - 9,gameChar_x -9,gameChar_y );
       line(gameChar_x + 10,gameChar_y - 19,gameChar_x - 1,gameChar_y -9 );
       line(gameChar_x - 1,gameChar_y - 9,gameChar_x + 9,gameChar_y);
       fill("#BFDB38");
       stroke("#001253");
       ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
       ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
       //hands
       line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
       line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
       ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
       ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
       //body
       fill("#1F8A70");
       rect(gameChar_x -17 , gameChar_y - 48,34,30);
       fill("#060047");
       rect(gameChar_x - 14, gameChar_y - 38, 28,5);
       fill("#FCE22A");
       ellipse(gameChar_x ,gameChar_y-35,15,15);
       //head
       fill("#00425A");
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
       line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
       ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
       //eye
       fill("#F94A29");
       stroke("#54B435");
       triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
    
       }
       else if(isRight)
       {
       //walking right code
       //legs
       fill(0,0,0);
       stroke(10);
       line(gameChar_x - 10,gameChar_y - 19,gameChar_x + 1,gameChar_y- 9);
       line(gameChar_x +1,gameChar_y - 9,gameChar_x - 9,gameChar_y );
       line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 17,gameChar_y -9 );
       line(gameChar_x + 17,gameChar_y - 9,gameChar_x + 9,gameChar_y);
       fill("#BFDB38");
       stroke("#001253");
       ellipse(gameChar_x - 7,gameChar_y - 1.5, 10,10);
       ellipse(gameChar_x + 8,gameChar_y - 1.5, 10,10);
       //hands
       line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
       line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
       ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
       ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
       //body
       fill("#1F8A70");
       rect(gameChar_x -17 , gameChar_y - 48,34,30);
       fill("#060047");
       rect(gameChar_x - 14, gameChar_y - 38, 28,5);
       fill("#FCE22A");
       ellipse(gameChar_x ,gameChar_y-35,15,15);
       //head
       fill("#00425A");
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
       line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
       ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
       //eye
       fill("#F94A29");
       stroke("#54B435");
       triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
    
       }
       else if(isFalling || isPlummeting)
       {
       //jumping facing forwards code
       //legs
       fill(0,0,0);
       stroke(10);
       line(gameChar_x - 9,gameChar_y - 19,gameChar_x - 15,gameChar_y- 9);
       line(gameChar_x - 15,gameChar_y - 9,gameChar_x - 9,gameChar_y );
       line(gameChar_x + 9,gameChar_y - 19,gameChar_x + 15,gameChar_y -9 );
       line(gameChar_x + 15,gameChar_y - 9,gameChar_x + 9,gameChar_y);
       fill("#BFDB38");
       stroke("#001253");
       ellipse(gameChar_x - 9,gameChar_y - 1.5 , 10,10);
       ellipse(gameChar_x + 9,gameChar_y - 1.5, 10,10);
       //hands
       line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 50);
       line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 50);
       ellipse(gameChar_x - 23,gameChar_y - 50, 2 ,2);
       ellipse(gameChar_x + 23,gameChar_y - 50, 2 ,2);
       //body
       fill("#1F8A70");
       rect(gameChar_x -17 , gameChar_y - 48,34,30);
       fill("#060047");
       rect(gameChar_x - 14, gameChar_y - 38, 28,5);
       fill("#FCE22A");
       ellipse(gameChar_x ,gameChar_y-35,15,15);
       //head
       fill("#00425A");
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
       arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
       line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
       ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
       //eye
       fill("#F94A29");
       stroke("#54B435");
       triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
    
       }
       else
       { 
         robo2();
       }
    }
 
}

function robo1(){
           //standing front facing code
           fill(0,0,0);
           stroke(10);
           line(gameChar_x - 9,gameChar_y - 22,gameChar_x - 9,gameChar_y -3);
           line(gameChar_x + 9,gameChar_y - 22,gameChar_x + 9,gameChar_y -3);
           fill("#BFDB38");
           stroke("#001253");
           ellipse(gameChar_x - 9,gameChar_y -5, 10,10);
           ellipse(gameChar_x + 9,gameChar_y -5, 10,10);
           //hands
           stroke(10);
           line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
           line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
           ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
           ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
            //body
           fill(246, 172, 232);
           rect(gameChar_x -17 , gameChar_y - 48,34,30);
           fill(129, 16, 14);
           rect(gameChar_x - 14, gameChar_y - 38, 28,5);
           fill(239, 226, 108);
           ellipse(gameChar_x ,gameChar_y-35,15,15);
           //head
           fill(234, 4, 126);
           arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
           arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
           line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
           ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
           //eye
           fill(25, 199, 230);
           stroke("#54B435");
           triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);	
}

function robo2(){
          //standing front facing code
          //legs
          fill(0,0,0);
          stroke(10);
          line(gameChar_x - 9,gameChar_y - 22,gameChar_x - 9,gameChar_y -3);
          line(gameChar_x + 9,gameChar_y - 22,gameChar_x + 9,gameChar_y -3);
          fill("#BFDB38");
          stroke("#001253");
          ellipse(gameChar_x - 9,gameChar_y -5, 10,10);
          ellipse(gameChar_x + 9,gameChar_y -5, 10,10);
          //hands
          stroke(10);
          line(gameChar_x - 18,gameChar_y - 37,gameChar_x - 23,gameChar_y - 30);
          line(gameChar_x + 18,gameChar_y - 37,gameChar_x + 23,gameChar_y - 30);
          ellipse(gameChar_x - 23,gameChar_y - 30, 2 ,2);
          ellipse(gameChar_x + 23,gameChar_y - 30, 2 ,2);
           //body
          fill("#1F8A70");
          rect(gameChar_x -17 , gameChar_y - 48,34,30);
          fill("#060047");
          rect(gameChar_x - 14, gameChar_y - 38, 28,5);
          fill("#FCE22A");
          ellipse(gameChar_x ,gameChar_y-35,15,15);
          //head
          fill("#00425A");
          arc(gameChar_x, gameChar_y - 50, 40, 40, PI, PI + QUARTER_PI);
          arc(gameChar_x, gameChar_y - 50, 40, 40, PI + QUARTER_PI, TWO_PI);
          line(gameChar_x + 13, gameChar_y - 63, gameChar_x + 13, gameChar_y - 72);
          ellipse(gameChar_x + 13,gameChar_y - 72, 2.5,2.5);
          //eye
          fill("#F94A29");
          stroke("#54B435");
          triangle(gameChar_x ,gameChar_y - 52,gameChar_x - 8, gameChar_y -60, gameChar_x + 8, gameChar_y -60);
}