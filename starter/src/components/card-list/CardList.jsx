import React from "react";
import "./card-list.css";

const CardList = props => {
  // console.log(props);
  return <div className="card-list">{props.children}</div>;
};

export default CardList;
