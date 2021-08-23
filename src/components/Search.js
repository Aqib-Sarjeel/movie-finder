import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Result from "./Result";
import { LoginContext } from "../App";

const Search = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const isUserLoggedIn = useContext(LoginContext);
  console.log("this is logged in data", isUserLoggedIn);

  console.log("this is movie data==>", movieData);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    // we can also use axios.get(api end point).then(()=>res) syntax for data fetching
    const moviesData = async () => {
      const movies = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=86e53571cf3015db00e35256f0330a5c&query=${search}`
      );
      setMovieData(movies.data.results);
    };

    moviesData();
  }, [search]);

  return (
    <React.Fragment>
      <Sidebar />
      <div className="main">
        {isUserLoggedIn.isLoggedIn ? (
          <form>
            <div className="text-center">
              <h1>Search Movies Here</h1>
            </div>
            <div className="text-center input-container ">
              <input
                className="form-control"
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search Movies"
              />{" "}
            </div>
          </form>
        ) : (
          <div className="text-center">
            {" "}
            <h3>You are not logged in!</h3>
          </div>
        )}
      </div>
      <br />
      <Result getData={movieData} search={search} />
    </React.Fragment>
  );
};

export default Search;
