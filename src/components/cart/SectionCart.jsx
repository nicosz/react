import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import "./imageProducts.css"

export const SectionCart = ({color}) => {
  const { cart, removeItem, total } = useContext(CartContext)

  const btnRemove = {Color: color }
  
  return (
    <div>
      {cart.length != 0 ?
        <Table className='mt-4' bordered hover variant="light">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => (
              <tr key={producto.id} className="">

                <td>
                  <FontAwesomeIcon  icon={faSquareXmark}  onClick={() => removeItem(producto.id)} />
                  <img className='image-products' src={producto.image}></img> {producto.title}
                </td>
                <td>{producto.price}</td>
                <td>{producto.count}</td>
                <td>{producto.price * producto.count}</td>
              </tr>
            ))}
            <tr>
              <td className='d-flex justify-content-center' colSpan={2}>{total()}</td>
            </tr>
          </tbody>
        </Table>
        : <Link to="/lambing">
          <h1 className="d-flex justify-content-center">Volver y agregar algo al carrito</h1>
        </Link>
      }
    </div >
  )
}
export default SectionCart;