export default function sketch05 (p) {

  p.class = new Ball {

    let x = 20;
    let y = -20; // Position of the ball
    color ball_color = color(33, 75, 106); // Color of the ball
    let ball_radius = 10; // Radius of the ball
    let speedFactorX, speedFactorY;
    let turnAroundNumberX, turnAroundNumberY;
    let min_distance = 48.0; // minimum distance to draw a line between two balls

    Ball[] ballArray;
    int numBalls = 50; // number Balls in the array

    Ball(let x_, float y_, color ball_color_, float ball_radius_, float speedFactorX_, float speedFactorY_, float turnAroundNumberX_, float turnAroundNumberY_) {
      x = x_;
      y = y_;
      ball_color = ball_color_;
      ball_radius = ball_radius_;
      speedFactorX = speedFactorX_;
      speedFactorY = speedFactorY_;
      turnAroundNumberX = turnAroundNumberX_;
      turnAroundNumberY = turnAroundNumberY_;
    }




  p.setup = function () {
    width =  0.8 * p.windowWidth;
    p.createCanvas(width, height);
    p.background(0);

    // Create the Ball array
    ballArray = new Ball[numBalls];
    // Fill the array with Balls
    for (int i = 0; i < ballArray.length; i++) {
      ballArray[i] = new Ball(random(width), random(height), int(random(ball_color)), random(2,20), random(-7.0, 7.0), random(-7.0, 7.0), 1.0, 1.0);
    }

  };



  p.draw = function () {
    background(255);

    strokeWeight(1);
    stroke(200);
    line(0,0,width-1,0);
    line(0,0,0,height-1);
    line(width-1,0,width-1,height-1);
    line(0,height-1,width-1,height-1);

    // display the ball array
    for (int i = 0; i < ballArray.length; i ++) {
      ballArray[i].display();
      ballArray[i].move();

      for (int j = 0; j < ballArray.length; j ++) {
       if ((dist(ballArray[j].x, ballArray[j].y, ballArray[i].x, ballArray[i].y) < min_distance) && (j != i)) {
         ballArray[j].drawLine(ballArray[i]);
       }
      }
    }
      };
};




  // display the ball
  p.display = function () {
    // println("display() is running");
    // println(ball_radius);
    fill(ball_color, 100);
    ellipse(x, y, ball_radius * 2, ball_radius * 2);
  }

  p.move = function () {
    float distFromMouse = dist(x, y, mouseX, mouseY);
    speedFactorX = ((distFromMouse + 0.1)/width + 0.2);
    speedFactorY = ((distFromMouse + 0.1)/height + 0.2);

    x = x + (turnAroundNumberX * speedFactorX);
    y = y + (turnAroundNumberY * speedFactorY);


   if (x > width - ball_radius) {
     x = width - 2 - ball_radius;
     turnAroundNumberX *= -1;
   } else if (x < ball_radius) {
     x = 2 + ball_radius;
     turnAroundNumberX *= -1;
   }

   if (y > height - ball_radius) {
      y = height - 2 - ball_radius;
      turnAroundNumberY *= -1;
   } else if (y < ball_radius) {
      y = 2 + ball_radius;
      turnAroundNumberY *= -1;
     }

  }


  p.drawLine = function(Ball b) {
    stroke(ball_color, 105);

  //  strokeWeight(3);
    line(x,y,b.x,b.y);
  }





}
