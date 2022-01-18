import React, { Component } from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

ListGroup.prototype = {
  items: PropTypes.array.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
};

export default ListGroup;
