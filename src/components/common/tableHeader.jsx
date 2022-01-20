import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const { sortColumn, onSort } = this.props;
    const column = { ...sortColumn };
    if (column.path === path) {
      column.order = column.order === "asc" ? "desc" : "asc";
    } else {
      column.path = path;
      column.order = "asc";
    }
    onSort(column);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;

    return sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
