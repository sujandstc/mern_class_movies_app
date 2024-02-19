import { useLocation, useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const params = useParams();

  return <>{params.movie_id}</>;
};

export default SingleMoviePage;
