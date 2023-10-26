import data from "../data/data.json";
import { useParams, Link } from "react-router-dom";

const CarDetail = () => {
  const idParams = useParams();

  const detailcar = data.filter((elt) => {
    return elt.id.toString() === idParams.id;
  });

  console.log(detailcar);
  console.log(idParams.id);

  return (
    <section className="details">
      <h2>{detailcar[0].carModel}</h2>
      <p>{detailcar[0].CarMake}</p>
      <p>{detailcar[0].CarYear}</p>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export default CarDetail;
