var ball;
var db;
var ballPos;
var position;
function setup(){
    db=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var pos=db.ref('ball/position');
    pos.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y){
  db.ref('ball/position').set({
      'x':position.x+x,
      'y':position.y+y
  })
}
function readPosition(data){
position=data.val();
ballPos.x=position.x;
ballPos.y=position.y;
}
function showError(){
    console.log("there is some error with reading the database");
}