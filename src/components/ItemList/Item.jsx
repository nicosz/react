import "./Item.css";
import Mybutton from "../mybutton/Mybutton";
import { Link } from "react-router-dom";
const Item = ({ producto }) => {
  return (
    <Link to={`/producto/${producto.id}`}>
      <div className="card">
        <img className="image" src={producto.image} alt={producto.title} />
        <div>
          <span>{producto.title}</span>
          <p> USD {producto.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Item