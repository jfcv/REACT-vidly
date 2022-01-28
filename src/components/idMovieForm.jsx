import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/movies", { push: true });
  };

  return (
    <React.Fragment>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
