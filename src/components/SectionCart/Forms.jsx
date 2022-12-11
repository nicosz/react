/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createOrder } from '../../Services/firestore';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';


export default function Formcheckout() {
  const [MessageError, setMessageError] = useState(false)

  const { total } = useContext(CartContext)

  const navigate = useNavigate()

  function ValidateEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
  }

  async function checkout() {

    if (information.firstName === "" || information.lastName === "" || (information.email === "" || !ValidateEmail(information.email))) {
      setMessageError(true)
      return
    }

    const order = {
      ...information,
      total: total()

    }

    const orderId = await createOrder(order);
    navigate(`/Thankyou/${orderId}`)
  }

  const [information, setInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  function handleChange(e) {
    setMessageError(false)
    const { name, value } = e.target
    setInformation(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Form className='ms-2 w-25'>
      <Form.Group className="my-3 " onChange={handleChange} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        {MessageError &&
          <div>
            <p className=''>I didn't write anything</p>
          </div>
        }
      </Form.Group>

      <Form.Group className="my-3" onChange={handleChange} controlId="formBasicPassword">
        <Form.Label>firstName</Form.Label>
        <Form.Control type="text" name='firstName' placeholder="Firstname" />
        {MessageError &&
          <div>
            <p className=''>I didn't write anything</p>
          </div>
        }
      </Form.Group>

      <Form.Group className="my-3" onChange={handleChange} controlId="formBasicPassword">
        <Form.Label>lastName</Form.Label>
        <Form.Control type="text" name='lastName' placeholder="lastname" />
        {MessageError &&
          <div>
            <p className=''>I didn't write anything</p>
          </div>
        }
      </Form.Group>
      <div>
        <Button variant="danger" className="mt-2 " onClick={() => checkout()}>Finalizar Compra</Button>
      </div>
    </Form>
  );
}
