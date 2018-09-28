package shapes;

import java.lang.Math;

class Triangle {
  // Your implementation goes here.
  private double SIDE_LENGTH;

  Triangle (double SIDE_LENGTH){
    this.SIDE_LENGTH = SIDE_LENGTH;
  }
  /**
   * @return The height of this triangle.
   */
  double getHeight () {
    // Replace SIDE_LENGTH with your side length variable.
    return Math.sin(Math.toRadians(60)) * SIDE_LENGTH;
  }

  double area () {
    return (Math.pow(this.SIDE_LENGTH, 2) / 2);
  }

  double perimeter () {
    return this.SIDE_LENGTH * 3;
  }
}
