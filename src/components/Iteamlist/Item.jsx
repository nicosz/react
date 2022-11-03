import "./Item.css";
import Mybutton from "../mybutton/Mybutton";
const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="image" src={producto.image} alt={producto.title} />
      <div>
        <span>{producto.title}</span>
        <p>USD {producto.price}</p>
        <p>{producto.category}</p>
        <Mybutton stock={producto.stock} title="Agregar al Carrito" color="green" />
      </div>
    </div>
  )
}

export default Item