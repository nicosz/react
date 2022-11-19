
import Bienvenida from "./Bienvenida";
import Item from "./Item";
import getItems from "../../services/mockService";
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";
import "./itemListContainer.css";


function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const { category } = useParams();

    async function getItemsAsync() {
        setLoaded(false)
        let respuesta = await getItems(category);
        setProducts(respuesta);
        setLoaded(true)
    }

    useEffect(() => {
        getItemsAsync();
    }, [category]);

    return (
        <div>
            {loaded ?
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
                </div> :
                <div className="spinner">
                    <p className="mx-1">Cargando</p>
                    <Spinner animation="border" />
                </div>
            }
        </div>
    )
}
export default ItemListContainer
