import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
/*import { deleteMovie } from "../services/fakeMovieService";*/
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()]
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movieInDb = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movieInDb });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  hadlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleGenderSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenderSelect}
          />
        </div>
        <div className="col-8">
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.hadlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;