import React from "react";
import p5 from "p5";



export class SketchThree extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {
let angnoise, radiusnoise;
let xnoise, ynoise;
let angle = -p.PI/2;
let radius;
let strokeCol = 200;
let strokeChange = -0.1;
let maxAngle = 360;
let width;
let height = 500;

  p.setup = function () {
    width = 0.8 * p.windowWidth;
    p.createCanvas(width, height);
    p.background(248,248,248);
    p.noFill();

    angnoise = p.random(10);
    radiusnoise = p.random(10);
    xnoise = p.random(10);
    ynoise = p.random(10);
  };



  p.draw = function () {
    radiusnoise += 0.005;
    radius = p.pow(p.sin(radiusnoise), 5) *200+ 1;  // use noise instead of custom noise for more noisy effect

    angnoise += 0.005;
    angle += p.pow(p.sin(angnoise), 3) * 1 - 0.50;  // angle
    if (angle > maxAngle) {angle -= maxAngle; }
    if (angle < 0) {angle += maxAngle; }

    xnoise += 0.01;
    ynoise += 0.01;

    // shift the center slightly
    let centerX = width/2 + (p.noise(xnoise)*40) - 20;
    let centerY = height/2 + (p.noise(ynoise)*40) - 20;

    let rad = p.radians(angle);
 let x1 = centerX + (radius * p.cos(rad));
let y1 = centerY + (radius * p.sin(rad));

let opprad = rad + p.PI;
let x2 = centerX + (radius * p.cos(opprad));
let y2 = centerY + (radius * p.sin(opprad));

 strokeCol += strokeChange;
 if (strokeCol > 254) {
 strokeChange = -0.1;
 }
 if (strokeCol < 0) {
 strokeChange = 0.1;
 }

 p.stroke(strokeCol, 30);
 // stroke(255, 50);

 p.strokeWeight(0.5);
 p.line(x1, y1, x2, y2);


  };};
  componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

  render() {
      return (
        <div ref={this.myRef}>
        </div>
      )
    }
  }
