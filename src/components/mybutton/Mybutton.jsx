import "./Mybutton.css"
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";


function Mybutton({ title, color, stock, producto,setIsInCart }) {
  const { addToCart } = useContext(CartContext)

  const styleButton = { backgroundColor: color }
  
  const [count, setcount] = useState(1)

  function handleBuy(){
    addToCart(producto, count)
    setIsInCart(true)
  }
  function handleSuma() {
    if (count < stock) {
      setcount(count + 1)
    }
  }

  function handleResta() {
    if (count > 1) {
      setcount(count - 1)
    }
  }

  return (
    <div className="d-flex text-center ">
      <button onClick={handleResta} style={styleButton} className="button "> - </button>
      <input value={count} />
      <button onClick={handleSuma} style={styleButton} className="button"> + </button>
      <Button onClick={handleBuy} variant="danger">{title}</Button>
    </div>
  )
}

export default Mybutton