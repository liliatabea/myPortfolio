import React from "react";
import p5 from "p5";



export class SketchOne extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {


    let height = 500;
    let width;
    let margin = 20;
    let xoff = 0;

  p.setup = function () {
    width =  0.8 * p.windowWidth;
    p.createCanvas(width, height);
    p.background(0);

  };



  p.draw = function () {
    p.noStroke();
     let r = 20;
     let g = 135;
     let b = p.map(p.mouseY, 0, p.height, 0, 255);
     xoff = xoff + 0.05;
     let rad = p.noise(xoff) * 60;
     p.fill(r, g, b);
     p.ellipse(p.mouseX, p.mouseY, rad, rad);
     if(p.frameCount % 30 === 0) {
       p.fill(255, 255, p.random(50, 205));
       p.ellipse(p.random(margin, width-margin), p.random(margin, height-margin), rad, rad);
     }
     p.fill(0, 10);
     p.rect(0, 0, width, height);

      };
    };
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
