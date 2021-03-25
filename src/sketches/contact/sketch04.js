export default function sketch04 (p) {

let height = 500;
let width;
let gapper = 100;

  p.setup = function () {
    width =  0.8 * p.windowWidth;
    p.createCanvas(width, height);
    p.background(248);
    p.fill(248,248,248, 10);
    p.noStroke();

    for (let x=-gapper/2; x<width+gapper; x+=gapper)
      for (let y=-gapper/2; y<height+gapper; y+=gapper)
        p.ellipse(x, y, gapper/2, gapper/2);
  };



  p.draw = function () {

    p.noFill();

    for (let x=-gapper*10-gapper/2; x<2*width; x+=gapper){
      for (let y=-gapper*4-gapper/2; y<2*height; y+=gapper){
        let colorX = p.map(x, 0, width, 200, 50);
        let colorY = p.map(y, 0, height, 50, 200);
        let rad1 = p.map(p.mouseX, 0, 2000, 50, 800);
        let rad2 = p.map(p.mouseY, 0, 2000, 50, 800);
        p.stroke(colorX, 200, colorY,20);
        p.ellipse(x, y, rad1, rad2);
      }}
        p.fill(255, 20);
        p.noStroke();
        p.rect(0, 0, width, height);
      };
};
