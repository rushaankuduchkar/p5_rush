function setup() {
  createCanvas(1920, 1080);
  background(49, 120, 68);
  strokeWeight (10);
  stroke ('red');
  point (960, 540);
  frameRate (10)
}
function draw () {
  let posX = mouseX;
  let posY = mouseY;
  point (posX, posY);
}
