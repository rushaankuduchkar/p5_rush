function setup() {
  createCanvas(500, 500);
  background(66, 135, 245);
  strokeWeight (10);
  stroke ('yellow');
  point (250, 250);
  frameRate (10)
}
function draw () {
  let posY = mouseX;
  let posX = mouseY;
  point (posX, posY);
}
