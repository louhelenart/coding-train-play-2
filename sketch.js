let ovalW=100;
let ovalH=200;
function setup() {
createCanvas (400,400)
background (255,0,255)

}

function draw() {
stroke(255,0,0)
  fill (0,0,255,50)
  ellipse (200,200,ovalH,ovalW)
  ovalH=mouseX
  ovalW=mouseY
}
function mousePressed() { 
  background (0, 0, 255)
 ellipse (200,200,ovalH,ovalW)

  
}
function mouseReleased() { 
  background (255, 0, 255)
}