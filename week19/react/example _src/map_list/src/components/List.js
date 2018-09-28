import React from "react";

const List = ({ groceries }) => (
  <ul className="list-group">
    {groceries.map(item => {
      if (item.purchased)
        return <li className="list-group-item" key={item.id}>{item.name} isPurchased: {item.purchased.toString()}</li>;  
      else 
        return null;
    })}
  </ul>
);

export default List;
