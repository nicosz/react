import Mybutton from "../Mybutton/Mybutton";
import "./itemdetail.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


function ItemDetail({ product }) {

  const [isInCart, setIsInCart] = useState(false)

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.image} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag"> ${product.price}</h4>
      </div>
      <div>
        {isInCart ?
          <Link to="/cart" >
            <Button className="btn-danger">Ir al carrito</Button >
          </Link> :
          <Mybutton setIsInCart={setIsInCart} producto={product} stock={product.stock} title="Agregar al Carrito"  color="#dc3545" />
        }
      </div>
    </div>
  )
}
export default ItemDetail