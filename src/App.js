import "./App.css";
import React from "react";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
