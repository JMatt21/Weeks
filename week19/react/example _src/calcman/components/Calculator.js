import React from "react";
import Math from "./Math";
// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
  <div>
    <p>
      <Math num1={16} num2={2} operator="+" />
    </p>
    <p>
      <Math num1={41.2} num2={17} operator="-" />
    </p>
    <p>
      <Math num1={100} num2={3} operator="*" />
    </p>
    <p>
      <Math num1={30} num2={4} operator="/" />
    </p>
    <p>
      <Math num1={30} num2={4} operator="burger boy" />
    </p>
  </div>
);

export default Calculator;
