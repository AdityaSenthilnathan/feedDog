var dogIMG, dogIMG2, dog, foodS, foodStock, dataBase, Exercise;
const db = firebase.database().ref();

function preload() {
  dogIMG = loadImage("images/dogImg.png");
  dogIMG2 = loadImage("images/dogImg1.png");
  //dataBase = firebase.database();
  //db = firebase.database().ref();
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogIMG);
  dog.scale = .1;
  textSize(30);
  fill("green");
  stroke(10);


}


function draw() {
  background(46, 139, 87);
  drawSprites();

  //add styles here
  text("Press UP to Feed Your Dog!!", 80, 30);
  text("Press DOWN to Restock Your Food!!", 0, 70);
  foodStock = firebase.database().ref("Food");
  foodStock.on("value", readStock);
  console.log(foodS);
  text("food Avalible: " + foodS, 150, 200);
  //Exercise = datBase.ref("Exercise");
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogIMG2);


  }

  if (keyWentDown(DOWN_ARROW)) {
    writeStock2(foodS);
    dog.addImage(dogIMG);


  }

}

function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {

  if (x <= 0) {

    x = 0

  }
  else {

    x = x - 1
  }
  firebase.database().ref('/').update({

    Food: x
  })

}

function writeStock2(x) {
  
 
  
    x = x + 1
  
  firebase.database().ref('/').update({

    Food: x
  })

}




