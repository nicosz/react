import "./itemdetail.css";
import Mybutton from "../mybutton/Mybutton";

function ItemDetail({ product }) {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.image} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Mybutton stock={product.stock} title="Agregar al Carrito" color="green" />
    </div>
  );
}

export default ItemDetail;