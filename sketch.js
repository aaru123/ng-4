var head 
var fixedRect;
var total=0;
var body=[]
var i1,i2,i3,i4,i5,i6
var xdir=0,ydir=0;
var gameState = 0
score = 0
function preload()
{
  i1 = loadImage("snake.png")
  i2 = loadImage("snake1.png")
  i3 = loadImage("snake2.png")
  i4 = loadImage("snake3.png")
  i5 = loadImage("bg.png")
  i6 = loadImage("apple.png")
}


function setup() {
  frameRate(10)

  createCanvas(500,500);
  fixedRect = createVector(250, 250);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  
  body[0] = createVector(100,100);
  
 // body[1] = createVector(450,200);
  //body[0].shapeColor = "green";
 // body[0].debug = true;
  
}

function draw() {
  background(i5);  

  if (gameState === 0){
    textSize(20)
    stroke ("black")
    text ("score "+ score, 400,50)
    
  }
  
  update();
//image(app,fixedRect.x,fixedRect.y,50,50)
  image(i6,fixedRect.x,fixedRect.y,50,50)
  if(fixedRect.x-body[0].x< 30 && fixedRect.y-body[0].y <30&& body[0].x-fixedRect.x< 30 && body[0].y-fixedRect.y<30)
  {
    console.log("hello")
    total++;
    fixedRect.x=floor(random(100,250))
    fixedRect.y=floor(random(100,250))
    grow()
    score+=1

  }
  if(end())
  {
  background("red");
  text("gameend",250,250);
}
 // console.log(total)

  for(i=0;i<body.length;i++)
  {
    fill("pink")
   // console.log(body[i])
      if(keyCode===UP_ARROW)
    {
      move(0,-1);
     // body[0].velocityX=0;
      //body[0].velocityY=-2;
      image(i2,body[i].x,body[i].y,40,40)
      gameState = 0
    }
    if(keyCode===LEFT_ARROW)
    {
      move(-1,0);
      //body[0].velocityX=-2
     // body[0].velocityY=0;
     image(i3,body[i].x,body[i].y,40,40)
     gameState = 0
    }
    if(keyCode===RIGHT_ARROW)
    {
      move(1,0);
    //  body[0].velocityX=2
     // body[0].velocityY=0;
     image(i1,body[i].x,body[i].y,40,40)
     gameState = 0
    }
    if(keyCode===DOWN_ARROW)
    {
      move(0,1);
      //body[0].velocityX=0
     // body[0].velocityY=2;
     image(i4,body[i].x,body[i].y,40,40)
     gameState = 0
    }
   
  }
 // drawSprites();
}
function move(a,b){
 // body[0].x+=a;
  //body[0].y+=b;
  xdir=a;
  ydir=b;
}
function grow()
{
  
 head = createVector(body[body.length-1].x,body[body.length-1].y)
body.push(head);
console.log(body)
}

function end()
{
  if(body[body.length-1].x>=width || body[body.length-1].x<0 || body[body.length-1].y>=height 
    || body[body.length-1].y<0)
    return true;
}
function update()
{
  var head =  body[body.length-1].copy()
 //console.log(head.x)
// console.log(head.y)

body.shift();
//console.log(body.length)
head.x+=xdir*10;
head.y+=ydir*10;
body.push(head)
//console.log(body.length)
}