package shapes;

import java.lang.Math;

//  Your implementation goes here.
class Square {
    private double base = 0;

    Square(double base){
        this.base = base;
    }

    public double area(){
        return this.base * this.base;
    }

    public double perimeter(){
        return this.base * 4;
    }


}
