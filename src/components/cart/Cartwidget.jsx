import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import "./Cartwidget.css"

function Cartwidget() {

    const { totalCount } = useContext(CartContext)

    return (
        <div className="mx-2">
            <div className="icono-de-carrito">
                <Link to="/cart"> 
                <div>
                    <p className="NumberForCart">{totalCount()}</p>
                </div>
                    <FontAwesomeIcon className='carrito icon' icon={faCartArrowDown} />
                </Link>
            </div>
        </div>
    )
}

export default Cartwidget
