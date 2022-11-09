import { useEffect, useState } from 'react';
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const { id } = useParams();


    async function getItemsAsync() {
        let respuesta = await getSingleItem(id);
        setProducto(respuesta)
    }

    useEffect(() => {
        getItemsAsync();
    }, [id])

    return (
        <div>
            <ItemDetail product={producto} />
        </div>
    )
}
export default ItemDetailContainer
