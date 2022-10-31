import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Cartwidget.css"

function Cartwidget() {
    return (
        <div className="mx-2">
            <div className="icono-de-carrito">
                <div>
                    <p className="NumberForCart ">1</p>
                </div>
                <FontAwesomeIcon className='carrito' icon={faCartArrowDown} />
            </div>
        </div>
    )
}

export default Cartwidget
