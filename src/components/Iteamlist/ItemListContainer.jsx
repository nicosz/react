import Item from './Item';
import Mybutton from '../mybutton/Mybutton';
export const ItemListContainer = () => {

    return (
        <div >
            <h1 className='mb-4'>Mis productos</h1>
            <div>
                <div className='d-flex justify-content-center '>
                    <div className="mx-4">
                        <Item
                            title="remera"
                            image="/imgs/Mate.webp"
                            price={100}/>
                        <Mybutton stock={4} title="Agregar al Carrito" color="green" />
                    </div>
                    <div className="mx-4">
                        <Item
                            title="Pantalon"
                            image="/imgs/Mate.webp"
                            price={100} />
                        <Mybutton stock={4} title="Agregar al Carrito" color="red" />

                    </div>
                    <div className="mx-4">
                        <Item
                            title="Zapatillas"
                            image="/imgs/Mate.webp"
                            price={100} />
                        <Mybutton stock={4} title="Agregar al Carrito" color="blue" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer
