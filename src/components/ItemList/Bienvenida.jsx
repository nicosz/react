import "./Bienvenida.css"
 const bienvenida = ({greeting}) => {
    return (
        <div>
            <div>
                <h1 className="text pb-2">{greeting}</h1>
            </div>
        </div>
    )
}
export default bienvenida