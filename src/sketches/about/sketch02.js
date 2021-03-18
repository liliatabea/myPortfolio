export default function sketch02 (p) {

let height = 500;
let width;
let gapper = 100;

  p.setup = function () {
    width =  0.8 * p.windowWidth;
    p.createCanvas(width, height);
    p.background(0);
    p.fill(0, 10);
    p.stroke(255);

    for (let x=-gapper/2; x<width+gapper; x+=gapper)
      for (let y=-gapper/2; y<height+gapper; y+=gapper)
        p.ellipse(x, y, gapper/2, gapper/2);
  };



  p.draw = function () {
    p.stroke(255,80);

    for (let x=-gapper/2; x<2*width; x+=gapper)
      for (let y=-gapper/2; y<2*height; y+=gapper)
        p.ellipse(x, y, p.mouseX, p.mouseY);
        p.fill(0, 10);
        p.rect(0, 0, width, height);
      };
};
