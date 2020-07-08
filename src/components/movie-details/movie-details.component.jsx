import React, { useState, useEffect } from "react";
import "./movie-details.styles.scss";

import { connect } from "react-redux";
import { setFilms } from "../../redux/films/films.action";

const movieDetails = ({ singleFilm }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [film, setFilm] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${singleFilm.singleFilm}?api_key=e576111d75dee905a12167d6f1387f71&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setFilm(res));
  }, [singleFilm.singleFilm]);
  console.log(film);
  return (
    <div>
      <h1>Movie Details</h1>
      {film ? <p>{film.original_title}</p> : <p>{""}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  singleFilm: state.singleFilm,
});

export default connect(mapStateToProps)(movieDetails);
