import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

export const SectionCart = () => {
  const { cart,removeItem } = useContext(CartContext)

  return (
    <div>
      {cart.length != 0?
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>quantity</th>
          <th>recicly</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((producto)=>(
      <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.title}</td>
        <td>{producto.price}</td>
        <td>{producto.count}</td>
        <td>       
          <Button onClick={()=>removeItem(producto.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
          </Button>  
        </td>
      </tr>  
      ))}
      </tbody>
    </Table>
      :<Link to="/lambing">
         <h1 className="d-flex justify-content-center">Volver y agregar algo al carrito</h1>
      </Link>
      }
    </div>
    )
  }
export default SectionCart;