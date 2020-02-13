//second sketch
//cotton candy!! -- was trying to make it rainbow and failed :(

var color;
var cotton_candy = true;


function setup() {
  createCanvas(500, 500);
  background(0);
  color = 0;
}

function draw() {
}

function mouseDragged() {
  if (cotton_candy) {
    if (color > 250) {
      color = 0;
    } else {
      color += 1;
    }
  }
  noStroke();
  fill(color, 200, 200);
  ellipse(mouseX, mouseY, 70, 70);
}
