import React, { Component } from "react";

/**
 * this component doesn't own any state
 * so it can be a Stateless Functional Component
 * it's a Controlled Component
 */
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
};

export default Like;
