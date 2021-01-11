var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,
line11,line12,line13,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,
line26,line27,line28,line29,line30,line22,line31,line32,line33,line34,line35,line36,line37,line38,
line39,line40,line41,line42,line43;
var beam1,beam2,beam3,beam4,invisble_Door;
var Diamond, Diamond_Img,background,back_Img,wall,wall_Img;
var thief,beam5,beam6,beam7,beam8,beam9,beam10,beam11,beam12;
var drone_Img,thief_Img,Door_Img,Door;;
var dieSound,lazer_Img,lazer2_Img;
var restart,restart_button,restart_Img,dieSound;
var YouWin_Img,You_Win;
var gameState = "start";
var gate1,gate2,gate3,gate4;
var key1,key_Img,key2,key2_Img,key3,key3_Img,key4,key4_Img,key_Sound,winning_Sound;
var chance = 3;
var Game_OverImg,Game_Over;

function preload (){
//loading images here
   Diamond_Img = loadImage("Sprites/Diamond.png");
   back_Img = loadImage("Sprites/background.jpg");
   wall_Img = loadImage("wall 1.png");
   drone_Img = loadImage("Sprites/drone.png");
   thief_Img = loadAnimation("Thief.png","Thief2.png");
   dieSound = loadSound("Sound1.wav");
   Door = loadImage("Sprites/Door.jpeg")
   //loading images of key
   key_Img = loadImage("Sprites/Key.png")
   key2_Img = loadImage("Sprites/Key.png");
   key3_Img = loadImage("Sprites/Key.png");
   key4_Img = loadImage("Sprites/Key.png");
   key_Sound = loadSound("Sound2.wav");
   thief_Img = loadImage("Thief.png");
   restart_Img = loadImage("Sprites/Reset.png");
   winning_Sound = loadSound("Win_Diamond.wav");
   lazer_Img = loadImage("Sprites/Lazer.png");
   lazer2_Img = loadImage("Sprites/lazer2.png");

   YouWin_Img = loadImage("Sprites/You_Win.png");
   Game_OverImg = loadImage("Sprites/GameOver.png");
}

function setup(){
    createCanvas(900,600);
     
    Diamond = createSprite(350,300);
    Diamond.addImage(Diamond_Img);
    Diamond.scale = 0.3;

    thief = createSprite(30,30,20,20);
    thief.shapeColor = "Purple";
    thief.addImage(thief_Img);
    thief.scale = 0.1

    // All the Bottom lines from line1
    line1 = createSprite(450,560,750,10);
    line1.shapeColor = "black";
    line2 = createSprite(450,520,310,10);
    line2.shapeColor = "black";
    line3 = createSprite(450,600,1000,10);
    line3.shapeColor = "red";
    line4 = createSprite(900,450,10,1000);
    line4.shapeColor = "red";
    line5 = createSprite(0,450,10,1000);
    line5.shapeColor = "red";
    line6 = createSprite(500,0,900,10);
    line6.shapeColor = "Red";
    line7 = createSprite(715,560,220,10);
    line7.shapeColor = "black";
    line8 = createSprite(825,455,10,220);
    line8.shapeColor = "black";
    line10 = createSprite(182,560,220,10);
    line10.shapeColor = "black";
    line11 = createSprite(193,520,130,10);
    line11.shapeColor = "black";
    line12 = createSprite(687,520,170,10);
    line12.shapeColor = "black";
    line30 = createSprite(450,480,470,10);
    line30.shapeColor = "black";
    line31 = createSprite(600,430,260,10);
    line31.shapeColor = "black";
    line32 = createSprite(305,430,250,10);
    line32.shapeColor = "black";
    line39 = createSprite(430,380,420,10);
    line39.shapeColor = "black";
    line40 = createSprite(445,340,290,10);
    line40.shapeColor = "black";

   // All the up lines from 13
    line13 = createSprite(188,35,220,10);
    line13.shapeColor = "black";
    line14 = createSprite(450,32,190,10);
    line14.shapeColor = "black"; 
    line15 = createSprite(680,32,290,10);
    line15.shapeColor = "black";
    line20 = createSprite(450,67,650,10); 
    line20.shapeColor = "black";
    line23 = createSprite(370,110,400,10); 
    line23.shapeColor = "black";
    line24 = createSprite(650,110,100,10); 
    line24.shapeColor = "black";
    line27 = createSprite(650,150,100,10);   
    line27.shapeColor = "black";             
    line28 = createSprite(500,150,100,10); 
    line28.shapeColor = "black";
    line29 = createSprite(455,150,550,10);
    line29.shapeColor = "black";
    line33 = createSprite(465,200,450,10);
    line33.shapeColor = "black";
    line38 = createSprite(445,240,290,10);
    line38.shapeColor = "black";     

    //left side.
    line16 = createSprite(75,225,10,390);
    line16.shapeColor = "black";
    line18 = createSprite(130,380,10,290);  
    line18.shapeColor = "black";  
    line21 = createSprite(130,155,10,180);
    line21.shapeColor = "black";
    line25 = createSprite(180,290,10,280);
    line25.shapeColor = "black";
    line34 = createSprite(220,305,10,150);
    line34.shapeColor = "black";
    line37 = createSprite(260,300,10,100);
    line37.shapeColor = "black";
    line41 = createSprite(300,290,10,105);
    line41.shapeColor = "black";
    line9 = createSprite(75,488,10,150);
    line9.shapeColor = "black";

    //right side.
    line17 = createSprite(825,193,10,330);
    line17.shapeColor = "black";  
    line19 = createSprite(770,350,10,350);    
    line19.shapeColor = "black";
    line22 = createSprite(770,160,10,190);
    line22.shapeColor = "black";
    line26 = createSprite(730,290,10,280 );
    line26.shapeColor = "black";
    line35 = createSprite(690,290,10,180);
    line35.shapeColor = "black";
    line36 = createSprite(640,312,10,140 );
    line36.shapeColor = "black";
    line42 = createSprite(590,273,10,75);
    line42.shapeColor = "black"

// Creating keys   
    key1 = createSprite(30,550,20,20);
    key1.shapeColor = "Gold";
    key1.addImage(key_Img);
    key1.scale = 0.1
    key2 = createSprite(800,520,20,20);
    key2.shapeColor = "Gold";
    key2.addImage(key2_Img);
    key2.scale = 0.1
    key3 = createSprite(790,70,20,20);
    key3.shapeColor = "Gold";
    key3.addImage(key3_Img);
    key3.scale = 0.1
    key4 = createSprite(210,190,20,20);
    key4.shapeColor = "Gold";
    key4.addImage(key4_Img);
    key4.scale = 0.1
    
    You_Win = createSprite(450,300,40,40);
    You_Win.addImage(YouWin_Img);
    You_Win.visible = false

    //creating sprites for laser beams
    beam1 = createSprite(540,273,5,60);
    beam1.shapeColor = color("Red");
    beam1.velocityY = 1;
    beam1.visible = false
    
    beam2 = createSprite(490,307,5,60);
    beam2.shapeColor = color("Red");
    beam2.velocityY = 1;
    beam2.visible = false

    beam3 = createSprite(440,273,5,60);
    beam3.shapeColor = color("Red");
    beam3.velocityY = 1;
    beam3.visible = false

    beam4 = createSprite(390,307,5,60);
    beam4.shapeColor = color("Red");
    beam4.velocityY = 1;
    beam4.visible = false

    beam5 = createSprite(130,155,20,60);
    beam5.shapeColor = color("Red");
    beam5.velocityY = 4;
 
    beam6 = createSprite(75,220,20,60);
    beam6.shapeColor = color("Red");
    beam6.velocityY = 4;  

    beam7 = createSprite(450,560,60,20);
    beam7.shapeColor = color("red");
    beam7.velocityX = 4;

    beam8 = createSprite(450,430,60,20);
    beam8.shapeColor = color("red");
    beam8.velocityX = 4;

    beam9 = createSprite(825,430,20,60);
    beam9.shapeColor = color("red");
    beam9.velocityY = 4; 

    beam10 = createSprite(770,350,20,60);
    beam10.shapeColor = "red";
    beam10.velocityY = 4;

    beam11 = createSprite(450,480,60,20);
    beam11.shapeColor = "red";
    beam11.velocityX = 4;

    beam12 = createSprite(370,110,60,20);
    beam12.shapeColor = "red";
    beam12.velocityX = 4;
        
    restart_button = createSprite(450,290,50,50);  
    restart_button.addImage(restart_Img);
    restart_button.scale = 0.8
    restart_button.visible = false 

    Game_Over = createSprite(450,300,50,50);
    Game_Over.addImage(Game_OverImg);
    Game_Over.scale = 0.3
    Game_Over.visible = false

    gate1 = createSprite(330,35,70,10);
    gate1.shapeColor = "Yellow";
    gate1.addImage(lazer_Img);
    gate1.scale = 0.2;
    gate2 = createSprite(280,520,70,10);
    gate2.shapeColor = "Yellow";
    gate2.addImage(lazer_Img);
    gate2.scale = 0.2;
    gate3 = createSprite(450,430,70,10);
    gate3.shapeColor = "Yellow";
    gate3.addImage(lazer_Img);
    gate3.scale = 0.2;
    gate4 = createSprite(590,315,10,60);
    gate4.shapeColor = "Yellow";
    gate4.addImage(lazer2_Img);
    gate4.scale = 0.2;
    
    invisble_Door = createSprite(590,325,10,10);
    invisble_Door.shapeColor = color("Black");
    invisble_Door.visible = false
    
}

function draw(){
 background(0);

 if(gameState === "start"){

  textSize(20);  
  fill("white");
   text("Help the thief reach the diamond by carefully escaping from the electric beams or you'll get a shock." + 
  " Find the way to open the gate..... YOU ARE IN FOR A SURPRISE. Press ENTER to continue",50,50);
  if(keyDown(ENTER)){
    gameState = "play";
  }
}

  else if(gameState === "play"){
    background(back_Img);
    
 //creating beams and bouncing them from the lines
  createEdgeSprites();
  beam1.bounceOff(line40);
  beam1.bounceOff(line38);
  beam2.bounceOff(line40);
  beam2.bounceOff(line38);
  beam3.bounceOff(line40);
  beam3.bounceOff(line38);
  beam4.bounceOff(line40);
  beam4.bounceOff(line38);
  beam5.bounceOff(line11);
  beam5.bounceOff(line20);
  beam6.bounceOff(line13);
  beam6.bounceOff(line10);
  beam7.bounceOff(line9);
  beam7.bounceOff(line8);
  beam8.bounceOff(line26);
  beam8.bounceOff(line25);
  beam9.bounceOff(line7);
  beam9.bounceOff(line15);
  beam10.bounceOff(line12);
  beam10.bounceOff(line20);
  beam11.bounceOff(line19);
  beam11.bounceOff(line18);
  beam12.bounceOff(line21);
  beam12.bounceOff(line22);

  thief.collide(line1);
  thief.collide(line2);
  thief.collide(line3);
  thief.collide(line4);
  thief.collide(line5);
  thief.collide(line6);
  thief.collide(line7);
  thief.collide(line8);
  thief.collide(line9);
  thief.collide(line10);
  thief.collide(line11);
  thief.collide(line12);
  thief.collide(line13);
  thief.collide(line14);
  thief.collide(line15);
  thief.collide(line16);
  thief.collide(line17);
  thief.collide(line18);
  thief.collide(line19);
  thief.collide(line20);
  thief.collide(line21);
  thief.collide(line22);
  thief.collide(line23);
  thief.collide(line24);
  thief.collide(line25);
  thief.collide(line26);
  thief.collide(line27);
  thief.collide(line28);
  thief.collide(line29);
  thief.collide(line30);
  thief.collide(line31);
  thief.collide(line32);
  thief.collide(line33);
  thief.collide(line34);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line40);
  thief.collide(line41);
  thief.collide(line42);
  thief.collide(gate1);
  thief.collide(gate2);
  thief.collide(gate3);
  thief.collide(gate4);

  if (keyDown("left")){
    thief.x = thief.x-5;
    }
            
  if (keyDown("right")){
    thief.x = thief.x+5;
  }
          
  if (keyDown("up")){
    thief.y = thief.y-5;
 }
             
  if (keyDown("down")){
     thief.y = thief.y+5;
  }

  if(thief.isTouching(invisble_Door)){
     beam1.visible = true
     beam2.visible = true
     beam3.visible = true
     beam4.visible = true
  }
  
   if(thief.isTouching(key1)){  
    key_Sound.play();
    key1.visible = false
    gate1.x = 250;
   }

   if(thief.isTouching(key2)){  
    key_Sound.play();
    key2.visible = false
    gate2.x = 200;
   } 

   if(thief.isTouching(key3)){  
    key_Sound.play();
    key3.visible = false
    gate3.x = 400;
   }

   if(thief.isTouching(key4)){  
    key_Sound.play();
    key4.visible = false
    gate4.y = 280;
    
   }
   if(thief.isTouching(Diamond)){
    winning_Sound.play();
    Diamond.destroy();
    You_Win.visible = true  
    background(0);
    //thief.destroy();
    key1.destroy();
    key2.destroy();
    key3.destroy();
    key4.destroy();
    gate1.velocityX = 0;
    gate1.velocityY = 0;
    gate2.velocityX = 0;
    gate2.velocityY = 0;
    gate3.velocityX = 0;
    gate3.velocityY = 0;
    gate4.velocityX = 0;
    gate4.velocityY = 0;
    beam5.velocityX = 0;
    beam5.velocityY = 0;
    beam6.velocityX = 0;
    beam6.velocityY = 0;
    beam7.velocityX = 0;
    beam7.velocityY = 0;
    beam8.velocityX = 0;
    beam8.velocityY = 0;
    beam9.velocityX = 0;
    beam9.velocityY = 0;
    beam10.velocityX = 0;
    beam10.velocityY = 0;
    beam11.velocityX = 0;
    beam11.velocityY = 0;
    beam12.velocityX = 0;
    beam12.velocityY = 0;
     
    gameState = "end";
  }

   if(thief.isTouching(gate1) || thief.isTouching(gate2) ||
   thief.isTouching(gate3) || thief.isTouching(gate4)){
    gate1.velocityX = 0;
    gate1.velocityY = 0;
    gate2.velocityX = 0;
    gate2.velocityY = 0;
    gate3.velocityX = 0;
    gate3.velocityY = 0;
    gate4.velocityX = 0;
    gate4.velocityY = 0;
    beam5.velocityX = 0;
    beam5.velocityY = 0;
    beam6.velocityX = 0;
    beam6.velocityY = 0;
    beam7.velocityX = 0;
    beam7.velocityY = 0;
    beam8.velocityX = 0;
    beam8.velocityY = 0;
    beam9.velocityX = 0;
    beam9.velocityY = 0;
    beam10.velocityX = 0;
    beam10.velocityY = 0;
    beam11.velocityX = 0;
    beam11.velocityY = 0;
    beam12.velocityX = 0;
    beam12.velocityY = 0;
    thief.velocityY = 0;
    thief.velocityX = 0;

    gameState = "end";
  } 
  if(thief.isTouching(beam6) || thief.isTouching (beam5) || thief.isTouching(beam7) || thief.isTouching(beam8)
  || thief.isTouching(beam9) || thief.isTouching(beam10) || thief.isTouching(beam1)||thief.isTouching(beam2)
  || thief.isTouching(beam3) || thief.isTouching(beam4)){
    beam1.velocityX = 0;
    beam1.velocityY = 0;
    beam2.velocityX = 0;
    beam2.velocityY = 0;
    beam3.velocityX = 0;
    beam3.velocityY = 0;
    beam4.velocityX = 0;
    beam4.velocityY = 0;
    beam5.velocityX = 0;
    beam5.velocityY = 0;
    beam6.velocityX = 0;
    beam6.velocityY = 0;
    beam7.velocityX = 0;
    beam7.velocityY = 0;
    beam8.velocityX = 0;
    beam8.velocityY = 0;
    beam9.velocityX = 0;
    beam9.velocityY = 0;
    beam10.velocityX = 0;
    beam10.velocityY = 0;
    beam11.velocityX = 0;
    beam11.velocityY = 0;
    beam12.velocityX = 0;
    beam12.velocityY = 0;
    
    gameState = "end";
}
  } else if(gameState === "end"){
    restart_button.visible = true;
    //setting velocity of the obstacles to 0;
    beam1.velocityY = 0;
    beam2.velocityY = 0;
    beam3.velocityY = 0;
    beam4.velocityY = 0;
    beam5.velocityY = 0;
    beam6.velocityY = 0;
    beam7.velocityX = 0;
    beam8.velocityX = 0;
    beam9.velocityY = 0; 
    beam10.velocityY = 0;
    beam11.velocityX = 0;
    beam12.velocityX = 0;

    if(mousePressedOver(restart_button)){
      reset();
      restart_button.visible = false;
      }
  }
  if(chance < 1){
    gameOver();
  }
 
    drawSprites();
    fill("Black")
    textSize(20) 
    text("CHANCE: " + chance,750,590); 
    
}
 
function reset(){
    //reseting the game.
    gameState = "play";
    chance = chance - 1;  

    //reseting the thief to its original position when restart_button is pressed.
      thief.x = 30;
      thief.y = 30;

      beam5.velocityY = 4;
      beam6.velocityY = 4;
      beam7.velocityX = 4;
      beam8.velocityX = 4;
      beam9.velocityY = 4; 
      beam10.velocityY = 4;
      beam11.velocityX = 4;
      beam12.velocityX = 4;
      
      key1.visible = true
      key2.visible = true
      key3.visible = true
      key4.visible = true

      beam1.visible = false
      beam2.visible = false
      beam3.visible = false
      beam4.visible = false

      gate1.x = 330;
      gate2.x = 280;
      gate3.x = 450;
      gate4.y = 315;
 }

 function gameOver(){
   //function for gameOver
   beam5.velocityY = 0;
   beam6.velocityY = 0;
   beam7.velocityX = 0;
   beam8.velocityX = 0;
   beam9.velocityY = 0; 
   beam10.velocityY = 0;
   beam11.velocityX = 0;
   beam12.velocityX = 0;

   beam1.destroy();
   beam2.destroy();
   beam3.destroy();
   beam4.destroy();

   Game_Over.visible = true
   restart_button.visible = false
 }
