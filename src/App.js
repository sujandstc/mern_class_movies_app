import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "./global.css";
import { Link, useNavigate } from "react-router-dom";
import AMovie from "./componenets/aMovie";
import Header from "./componenets/header";

const App = () => {
  const navigate = useNavigate();
  const contactme = useRef();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const redirector = () => {
    navigate("/about");
  };

  useEffect(() => {
    getMovies();
  }, []);

  const showAlertFunctionOfParent = (message) => {
    alert(message);
  };

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );

      setMovies(response.data.moviesData);
      setIsError(false);
      setIsLoading(false);
    } catch (e) {
      // on error
      setIsError(true);
      setIsLoading(false);
    }
  };

  const ErrorDiv = () => {
    return (
      <>
        <div
          style={{
            background: "#e7e7e7",
            padding: "10px",
            textAlign: "center",
            color: "red",
          }}
        >
          <h1> Check your internet connection.</h1>
          Error connecting to server..
          <br />
        </div>
      </>
    );
  };

  const searchMovie = async (searchText) => {
    if (searchText.length < 3) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchText}`
      );
      console.log(response.data);
      setMovies(response.data.moviesData);
      setIsError(false);
      setIsLoading(false);
    } catch (e) {
      // on error
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      Movies: <button onClick={getMovies}>Refresh</button> <br />
      {isLoading && (
        <>
          <div style={{ textAlign: "center" }}>Loading...</div>
        </>
      )}
      <Header searchFunction={searchMovie} />
      {isError && <ErrorDiv />}
      <div className="allItems">
        {movies.map((element) => {
          return (
            <>
              <AMovie
                data={element}
                childFunction={showAlertFunctionOfParent}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
