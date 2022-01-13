import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService.js";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  renderTitle() {
    const { length: count } = this.state.movies;
    return count === 0 ? (
      <p className="text-center">There are no movies in the database.</p>
    ) : (
      <p className="text-center">Showing {count} movies in the database.</p>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderTitle()}

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
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
      </React.Fragment>
    );
  }
}

export default Movies;
