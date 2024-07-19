function setup() {
  createCanvas(1920, 1080);
  background(66, 135, 245);
  strokeWeight (10);
  stroke ('yellow');
  point (960, 540);
  frameRate (10)
}
function draw () {
  let posX = mouseX;
  let posY = mouseY;
  point (posX, posY);
}
