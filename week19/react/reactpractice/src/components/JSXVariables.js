import React from "react";

const name = "Reggie Jackson";
const reactOpinions = "is pretty cool";

const styles = {
  test: {
    fontSize: "3rem",
    padding: "0 0 0 200px"
  }
}

function Deana(name) {
  return name.replace(/[aeiou]/ig, '');
};

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1 style={styles.test}>Hi! My name is {name}.</h1>
        <h2>My name has {name.length} letters</h2>
        <h2>I think React {reactOpinions}</h2>
        <br />
        <h2> I have removed all the vowels from my name. It is now {Deana(name)}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
