import "./Item.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./button.css"
const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="image" src={producto.image} alt={producto.title} />
      <div>
        <span>{producto.title}</span>
        <p> USD {producto.price}</p>
        <Link to={`/producto/${producto.id}`}>
        <Button className="my-2 button" variant="danger" >Ver mas</Button>
        </Link>
      </div>
    </div>
  )
}

export default Item