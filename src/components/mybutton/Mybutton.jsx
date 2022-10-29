import "./Mybutton.css"
import { useState } from 'react';

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
    <>
      <button onClick={handleSuma} style={styleButton} className="button"> + </button>
      <button onClick={handleResta} style={styleButton} className="button"> - </button>
      <p>{title}</p>
      <p>{count}</p>
    </>
  )
}

export default Mybutton