import React, { Component, useEffect } from "react";
import { getMovie } from "../services/fakeMovieService";
import { useParams, useNavigate } from "react-router-dom";
import MovieForm from "./movieForm";

const MovieFormWrapper = () => {
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;
  const movie = getMovie(id);

  useEffect(() => {
    if (id === "new") return;
    if (!movie) return navigate("/not-found", { replace: true });
  });

  return <MovieForm id={id} movie={movie} navigate={navigate} />;
};

export default MovieFormWrapper;
