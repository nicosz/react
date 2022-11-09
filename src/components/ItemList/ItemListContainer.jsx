
import { useState, useEffect } from "react";
import Bienvenida from "./Bienvenida";
import Item from "./Item";
import "./Item.css";
import getItems from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    async function getItemsAsync() {
        let respuesta = await getItems(idCategory);
        setProducts(respuesta);
    }

    useEffect(() => {
        getItemsAsync();
    }, [idCategory]);

    return (
        <div>
            <div className="mt-2">
                <div className="d-flex justify-content-center">
                    <Bienvenida greeting="bienvenidos a la pagina" />
                </div>
                <h1 className="d-flex justify-content-center">mis productos</h1>
                <div className='d-flex justify-content-center flex-wrap text-center'>
                    {products.map((producto) => (
                        <Item producto={producto} key={producto.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer
