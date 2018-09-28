import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map(friend => {
      return <Card thing={friend} />
    })}
  </Wrapper>
);

export default App;
