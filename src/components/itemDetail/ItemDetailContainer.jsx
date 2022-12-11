import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import { getSingleItem } from '../../Services/firestore';
import { useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import {Spinner} from "react-bootstrap";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    const [loaded, setLoaded] = useState(false);


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
                <ItemDetail product={producto} />:
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
export default ItemDetailContainer
