import Bienvenida from "./Bienvenida";
import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';
import { Button } from "react-bootstrap";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";
import "./itemListContainer.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const { category } = useParams();


    async function getItemsAsync() {
        if (!category) {
            let respuesta = await getItems();
            setProducts(respuesta);
            setLoaded(true)
        } else {
            setLoaded(false)
            let respuesta = await getItemsByCategory(category);
            setProducts(respuesta);
            setLoaded(true)
        }
    }

    useEffect(() => {
        getItemsAsync();
    }, [category]);

    return (
        <div>
            {loaded ?
                <div className="mt-2">
                    <div className="text-center">
                        <Bienvenida greeting="Bienvenidos a la página" />
                    </div>
                    <h1 className="d-flex justify-content-center">Mis productos</h1>
                    <div className='d-flex justify-content-center flex-wrap text-center'>
                        {products.map((producto) => (
                            <Item producto={producto} key={producto.id} />
                        ))}
                    </div>
                </div> :
                <div className="spinner">
                    <Button variant="danger" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            }
        </div>
    )
}
export default ItemListContainer
