var dog, dogImg, happyDog, happyDogImg,database,foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage("dogImg1", dogImg);

  foodStock=database.ref('food'); 
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogHappy);

  }

  drawSprites();
  stroke("white");
  teztSize(20);
  fill("white");
  text("Press up arrow to feed: "+ foodStock,250,270);
}

function readStock(data)
{
foodS = data.val();
}

function writeStock(x)
{
database.ref('/').update({
  food:x
})
}

