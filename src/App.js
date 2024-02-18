import axios from "axios";
import { useEffect, useState } from "react";

import "./global.css";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const redirector = () => {
    navigate("/about");
  };

  useEffect(() => {
    getMovies();
  }, []);

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

  return (
    <>
      Movies: <button onClick={getMovies}>Refresh</button> <br />
      {isLoading && (
        <>
          <div style={{ textAlign: "center" }}>Loading...</div>
        </>
      )}
      {isError && (
        <>
          <div style={{ background: "red" }}>Error connecting to server..</div>
        </>
      )}
      <div className="allItems">
        {movies.map((element) => {
          return (
            <>
              <div className="singleItem">
                <b>{element.name} </b>
                <br /> <br />
                <img
                  src={element.image}
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                  }}
                />
                <br />
                {element.info}
              </div>
            </>
          );
        })}
      </div>
      <div className="footer">
        <Link to={"/about"}>About this app!</Link>
      </div>
      <div className="footer">
        Programatic
        <div onClick={redirector}>Click here to redirect</div>
      </div>
    </>
  );
};

export default App;
