import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.dynoacademy.com/test-api/v1/movies"
    );
    setMovies(response.data.moviesData);
  };

  return (
    <>
      Movies: <br />
      {movies.map((element) => {
        return (
          <>
            <div
              style={{ background: "#CCC", padding: "10px", margin: "10px" }}
            >
              {element.name} <br />
              <img src={element.image} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default App;
