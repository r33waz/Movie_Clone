import axios from "axios";
import React, { useEffect, useState } from "react";
import Moviecard from "./movieCard";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@/slice/movieSlice";

function DisplayMovies() {
  //   const [movie, setMovies] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const movie = useSelector((state:any) => {
    // console.log(state);
    return state.movieSlice.movie;
  });
  async function Movie() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a137f8300a702353890226d02aecf679"
      );
      console.log(response.data.results);
      dispatch(setMovies(response.data.results));
    } catch (error) {}
  }

  async function Searchmovie() {
    try {
      let response: any;
      if (SearchQuery !== "") {
        response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${SearchQuery}&api_key=a137f8300a702353890226d02aecf679`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
            },
          }
        );
      }
      console.log(response.data.results);
      dispatch(setMovies(response.data.results));
    } catch (error) {}
  }
  useEffect(() => {
  Movie();
  },[]);

  useEffect(() => {
    console.log('here')
    const debouncing = setTimeout(() => {
      Searchmovie();
    }, 500);

    return () => clearTimeout(debouncing);
  }, [SearchQuery]);

  ///
  async function DisplayMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.asc&with_genres=${genera}&api_key=a137f8300a702353890226d02aecf679`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
          },
        }
      );
      // console.log(response.data.reasults)
      dispatch(setMovies(response.data.results));
    } catch (error) {}
  }

  ///
  async function DisplayTVshows() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a137f8300a702353890226d02aecf679",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
          },
        }
      );
      dispatch(setMovies(response.data.results));
    } catch (error) {}
  }

  ///
  // async function DisplayPeople() {
  //   try {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=a137f8300a702353890226d02aecf679",
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
  //         },
  //       }
  //     );
  //     dispatch(setMovies(response.data.results));
  //   } catch (error) {}
  // }

  //Find genera of movie
  const [short, setShort] = useState('')
  async function ShortMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${short}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
          },
        }
      );
      console.log(response.data.results)
      dispatch(setMovies(response.data.results))
    } catch (error) {
      
    }
  }
  const [genera, setGenera] = useState("");
  async function GeneraMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genera}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM3ZjgzMDBhNzAyMzUzODkwMjI2ZDAyYWVjZjY3OSIsInN1YiI6IjY0NzVjODVjOTYzODY0MDEzNTNmZjA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-l4hV785F23vFW1hXuS6kZW31hziSXeBNMA-M60Gdk",
          },
        }
      );
      // console.log(response.data.results)
      dispatch(setMovies(response.data.results));
    } catch (error) {}
  }
  return (
    <>
      <div className="header">
        {/* <div>
          <img src="simple-form\assets\download.jpeg" alt="tmdm image" />
        </div> */}
        <ul>
          <button onClick={DisplayMovie}>Movies</button>
          <button onClick={DisplayTVshows}>TV Shows</button>
          {/* <button onClick={DisplayPeople}>People</button> */}
          <button>More</button>
        </ul>
      </div>
      <input
        type="text"
        placeholder="Search movie"
        className="w-48 px-5 my-10 rounded-lg mx-14 h-9"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="my-6 border rounded-lg h-60 w-72 border-white-500 mx-14">
        <h1 className="mx-6 my-5 text-2xl font-bold text-white font-si">
          Short
        </h1>
        <p className="mx-6 text-white ">Sort Results By</p>
        <select
          className="w-full max-w-xs select select-success"
          placeholder="Movie genres"
          onChange={(e) => {
            const selectshort = e.target.value;
            setShort(selectshort);
          }}
        >
          <option disabled selected>
            Short Movie
          </option>
          <option value="popularity.desc">Popularity asce</option>
          <option value="popularity.asc">Popularity asce</option>
          <option value="revenue.asc">Revenue asce</option>
          <option value="revenue.desc">Revenue desc</option>
          <option value="primary_release_data.asc">Old movies</option>
          <option value="primary_release_date.desc">Latest movies</option>
          <option value="vote_average.asc">Rating asscending</option>
          <option value="vote_average.desc">Rating descending</option>
          <option value="vote_count.asc">Vote count assending</option>
          <option value="vote_count.desc">Vote count decsending</option>
        </select>

        <button
          onClick={ShortMovie}
          className="w-40 h-12 mx-16 my-5 text-2xl font-bold text-white rounded-full border-white-500 bg-sky-500"
        >
          Sort
        </button>
      </div>
      <div className="border rounded-lg h-60 w-72 border-white-500 mx-14 my-14">
        <h1 className="mx-6 my-5 text-2xl font-bold text-white font-si">
          Filter
        </h1>
        <p className="mx-6 text-white ">Filter Movie</p>
        <select
          className="w-full max-w-xs select select-success"
          placeholder="Movie genres"
          onChange={(e) => {
            const selectgenra = e.target.value;
            setGenera(selectgenra);
          }}
        >
          <option disabled selected>
            Movie genres
          </option>
          <option value={28}>Action</option>
          <option value={12}>Adventure</option>
          <option value={16}>Animation</option>
          <option value={35}>Comedy</option>
          <option value={80}>Crime</option>
          <option value={99}>Documentary</option>
          <option value={18}>Drame</option>
          <option value={10751}>Family</option>
          <option value={14}>Fantasy</option>
          <option value={36}>History</option>
          <option value={27}>Horror</option>
          <option value={10402}>Music</option>
          <option value={9648}>Mystery</option>
          <option value={10749}>Romance</option>
          <option value={878}>Science Fiction</option>
          <option value={10770}>TV Movie</option>
          <option value={53}>Thriller</option>
          <option value={10752}>War</option>
          <option value={37}>Western</option>
        </select>
        <button
          className="w-40 h-12 mx-16 my-5 text-2xl font-bold text-white rounded-full bg-sky-500"
          onClick={GeneraMovie}
        >
          Filter
        </button>
      </div>
      <div className="grid grid-cols-1 movie sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movie.map((movies: any) => {
          return (
            <Moviecard
              key={movies.id}
              title={movies.title}
              release_date={movies.release_date}
              poster_path={
                "https://image.tmdb.org/t/p/w500" + movies.poster_path
              }
              vote_count={movies.vote_count}
            />
          );
        })}
      </div>
    </>
  );
}

export default DisplayMovies;
