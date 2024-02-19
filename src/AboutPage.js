import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { state } = useLocation();

  return (
    <>
      {state.movie_name} <br />
      <br />
      <img src={state.image} />
    </>
  );
};

export default AboutPage;
