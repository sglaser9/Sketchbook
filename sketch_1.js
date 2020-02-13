
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  background(144, 202, 249);

  // Set colors
  fill(204, 100, 192, 123);

  // flower
  translate(200, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 30, 130);
    rotate(PI/5);
  }
  //stem
  translate(-60, 0);
  fill(20, 200, 100, 112);
  //stroke(127, 63, 120);
  rect(50,40,20,200)

}
