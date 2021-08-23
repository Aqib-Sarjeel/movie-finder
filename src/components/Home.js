import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import axios from "axios";
import Sidebar from "./Sidebar";

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(trendingMovie);
  useEffect(() => {
    document.body.style.backgroundColor = "#efefef";
    const getData = async () => {
      setIsLoading(true);
      const trendingMoviesData = await axios(
        `https://api.themoviedb.org/3/trending/all/day?api_key=86e53571cf3015db00e35256f0330a5c`
      );

      setTrendingMovie(trendingMoviesData.data.results);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <React.Fragment>
      <Sidebar />

      <div className="main">
        <div className="trending">
          <h1>Trending Movies of the day</h1>
        </div>
        {isLoading ? (
          <div className="text-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="flex-container">
            {trendingMovie.map((m) => {
              return (
                <React.Fragment key={m.id}>
                  <div className="card bt-card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={"https://image.tmdb.org/t/p/w500" + m.poster_path}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {m.title || m.original_name}
                      </h5>
                      <h6 className="card-text text-muted text-center">
                        Release Date:{" "}
                        {m.release_date || (
                          <span className="text-danger">Not Availabe</span>
                        )}
                        <br />
                        Rating:
                        <span className="text-success">{m.vote_average}</span>
                      </h6>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
