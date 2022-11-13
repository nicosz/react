import "./Mybutton.css"
import { useState } from 'react';
import { Button } from "react-bootstrap";

function Mybutton({ title, color, stock }) {

  const styleButton = { backgroundColor: color }
  const [count, setcount] = useState(1)

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
    <div className="d-flex text-center">
      <button onClick={handleResta} style={styleButton} className="button"> - </button>
      <input value={count}/>
      <button onClick={handleSuma} style={styleButton} className="button"> + </button>
      <Button variant="primary">{title}</Button>
    </div>
  )
}

export default Mybutton