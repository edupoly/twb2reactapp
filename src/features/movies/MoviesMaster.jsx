import React from "react";
import { useGetMoviesQuery } from "../../services/moviesApi";

function MoviesMaster() {
  var { isLoading, data } = useGetMoviesQuery();
  return (
    <div>
      <h1>MoviesMaster</h1>
      {isLoading && <b>Loading</b>}
      {!isLoading && (
        <ul>
          {data?.map((movie) => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default MoviesMaster;
