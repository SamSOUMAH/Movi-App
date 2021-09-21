import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Punisher",
      description: "kids Movies",
      posterURL: "https://youtu.be/tcqip3ULaCY",
      rating: 5,
      image: "./images/Punisher.jpg",
    },

    {
      id: 2,
      title: "SUITS",
      description: "kids Movies",
      posterURL: "https://youtu.be/MkjMrzT6TvA",
      rating: 5,
      image: "./images/SUITS.webp",
    },

    {
      id: 3,
      title: "dragons",
      description: "Driver Film",
      posterURL: "https://youtu.be/lEoLOHVl76U",
      rating: 4,
      image: "./images/short02.webp",
    },
    {
      id: 4,
      title: "night in the museum",
      description: "Driver Film",
      posterURL: "https://youtu.be/lEoLOHVl76U",
      rating: 3,
      image: "./images/momo.jpg",
    },
    {
      id: 5,
      title: "YOU",
      description: "Driver Film",
      posterURL: "https://youtu.be/lEoLOHVl76U",
      rating: 5,
      image: "./images/you-series.jpg",
    },
    {
      id: 6,
      title: "The order",
      description: "Driver Film",
      posterURL: "https://youtu.be/lEoLOHVl76U",
      rating: 1,
      image: "./images/the_order.jpg",
    },
  ]);

  const [filtredMovies, setFiltredMovies] = useState([]);

  const search = (type) => {
    setFiltredMovies(
      type.length === 0
        ? movies
        : Object.entries(type)[0][0] === "rating"
        ? movies.filter((el) => el.rating === type.rating)
        : movies.filter((el) =>
            el.title.toLowerCase().includes(type.titleMovie.toLowerCase())
          )
    );
  };

  const add = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
      <div className="half">
        <div className="appHeader">
          <Filter movies={movies} search={search} />
          <br />
          <br />
          <MovieCard add={add} />
          <br />
          <br />
        </div>

        <div
          className="grid" /* style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}} */
        >
          {filtredMovies.map((e) => (
            <div>
              <a href={e.posterURL}>
                <img src={e.image} alt="" />
              </a>
              <br />
              <label>Title : {e.title}</label>
              <br />
              <label>Rating : {e.rating}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
