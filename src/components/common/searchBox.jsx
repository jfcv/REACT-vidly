import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
