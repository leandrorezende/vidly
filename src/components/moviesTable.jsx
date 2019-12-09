import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: movie => <Like onLike={() => this.props.onLike(movie)} liked={movie.liked} /> },
    {
      key: "actions",
      content: movie => (
        <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
      label: "Actions"
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={movies} />;
  }
}

export default MoviesTable;
