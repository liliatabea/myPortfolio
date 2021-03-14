export default function sketch01 (p) {

let height = 500;
let width;

  p.setup = function () {
    width = p.windowWidth;
    p.createCanvas(width, height);
    p.background(0);
  };



  p.draw = function () {
    p.noStroke();
    let r = 20;//map(p.mouseX, 0, p.width, 0, 255);
    let g = 135;
    let b = p.map(p.mouseY, 0, p.height, 0, 255);
    let rad = p.random(8,35);
    p.fill(r, g, b);
    p.ellipse(p.mouseX, p.mouseY, rad, rad);
    p.fill(0, 10);
    p.rect(0, 0, width, height);
  };
};
