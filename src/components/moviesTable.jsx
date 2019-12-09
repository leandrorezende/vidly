import React, { Component } from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'actions', path: '', label: 'Actions' },
    ]

    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        return (
            <table className="table table-striped">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody data={movies} />
                <tbody>
                    {/* this is the movies local of this method, not the movies from the state obj*/}
                    {movies.map(m => (
                        <tr key={m._id}>
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><Like onLike={() => onLike(m)} liked={m.liked} /></td>
                            <td>
                                <button onClick={() => onDelete(m)} className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;