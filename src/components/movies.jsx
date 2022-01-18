import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService.js";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";
import { getGenres } from "../services/fakeGenreService.js";
import ListGroup from "./common/listGroup.jsx";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {},
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (id) => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies = selectedGenre._id
      ? allMovies.filter((movie) => movie.genre.name === selectedGenre.name)
      : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    const count = filteredMovies.length;

    if (count === 0)
      return (
        <p className="text-center">There are no movies in the database.</p>
      );

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
          <p className="text-center">Showing {count} movies in the database.</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
