import { useEffect, useState } from 'react';
import { getSingleItem } from "../../services/mockService";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [loaded, setLoaded] = useState(false);

    const [producto, setProducto] = useState([])
    const { id } = useParams();


    async function getItemsAsync() {
        setLoaded(false)
        let respuesta = await getSingleItem(id);
        setProducto(respuesta)
        setLoaded(true)
    }

    useEffect(() => {
        getItemsAsync();
    }, [id])

    return (
        <div>
            {loaded ?
                <ItemDetail product={producto} /> :
                <div className="spinner">
                    <p className="mx-1">Cargando</p>
                    <Spinner animation="border" />
                </div>
            }
        </div>
    )
}
export default ItemDetailContainer
