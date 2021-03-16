export default function sketch02 (p) {

let height = 500;
let width;
let canvas_dist;

  p.setup = function () {
    //p.frameRate(4);
    width =  0.8 * p.windowWidth;
    p.createCanvas(width, height);

    canvas_dist = p.dist(0, 0, width, height)
    p.noStroke();
  };



  p.draw = function () {

    p.background(0, 80);
    for (let i = 0; i <= width; i += 25) {
      for (let j = 0; j <= height; j += 25) {
        //let size = p.dist(p.mouseX, p.mouseY, i, j);
        let size = 220;
        size = (size/canvas_dist) * 450;
        //size = (size) * 450;
        p.fill(j, i, size, 10 );
        p.ellipse(i, j, size, size);
    }
  }
};
};
