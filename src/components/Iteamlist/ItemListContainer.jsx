import Bienvenida from './Bienvenida';
import Item from './Item';
import Mybutton from '../mybutton/Mybutton';
export const ItemListContainer = () => {

    return (
        <div >
            <div>
                <div>
                    <div className="mt-2">
                        <Bienvenida
                            greeting="bienvenidos a la pagina" />
                        <Item

                            titleDeProductos="Mis productos"
                            title="remera"
                            image="/imgs/remera.webp"
                            price={100} />
                        <Mybutton stock={4} title="Agregar al Carrito" color="green" />
                    </div>
                    <div className="mt-2">
                        <Item
                            title="Pantalon"
                            image="/imgs/pantalon.webp"
                            mensaje="Greeting"
                            price={100} />
                        <Mybutton stock={4} title="Agregar al Carrito" color="black" />

                    </div>
                    <div className="mt-2">
                        <Item
                            title="Zapatillas"
                            image="/imgs/Zapatillas.webp"
                            mensaje="Greeting"
                            price={100} />
                        <Mybutton stock={4} title="Agregar al Carrito" color="blue" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer
