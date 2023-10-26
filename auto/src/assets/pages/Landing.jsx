import data from "../data/data.json";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>Cars</h1>

      <article className="car">
        {data.map((car, index) => (
          <div key={index}>
            <h2>{car.carModel}</h2>
            <Link to={`/${car.id}`}>Show more</Link>
          </div>
        ))}
      </article>
    </>
  );
};

export default Landing;
