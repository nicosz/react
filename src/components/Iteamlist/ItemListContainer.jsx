import Bienvenida from './Bienvenida';
import Item from "./Item"
import { useEffect, useState } from 'react';
import products from '../../data/data';
export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductos(products)
        }, "2000")
    }, [])

    return (
        <div>
            <div className="mt-2">
                <Bienvenida greeting="bienvenidos a la pagina" />
                <h1>mis productos</h1>
                <div className='d-flex justify-content-center flex-wrap'>
                    {productos.map((producto) => (
                        <Item producto={producto} key={producto.id} />
                    ))}
                </div>


            </div>
        </div>
    )
}
export default ItemListContainer
