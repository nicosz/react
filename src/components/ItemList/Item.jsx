import "./Item.css";
import Mybutton from "../mybutton/Mybutton";
import { Link } from "react-router-dom";
const Item = ({ producto }) => {
  return (
    <div className="card">
        <img className="image" src={producto.image} alt={producto.title} />
      <div>
      <Link to={`/producto/${producto.id}`}>
        <span>{producto.title}  </span>
        <p> USD {producto.price}</p>
      </Link>
        <p>{producto.category}</p>
        <Mybutton stock={producto.stock} title="Agregar al Carrito" color="green" />
      </div>
    </div>
  )
}

export default Item