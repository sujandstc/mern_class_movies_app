import { Link } from "react-router-dom";

const AMovie = (props) => {
  return (
    <>
      <>
        <div className="singleItem">
          <b>{props.data.name} </b>
          <b>{props.data.id} </b>
          <br /> <br />
          <img
            src={props.data.image}
            style={{
              borderRadius: "50%",
              height: "100px",
              width: "100px",
            }}
          />
          <br />
          {props.data.info}
          <br />
          <Link to={`/movie/${props.data.id}`}>
            <button>More details</button>
          </Link>
        </div>
      </>
    </>
  );
};

export default AMovie;
