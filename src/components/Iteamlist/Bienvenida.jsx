import "./Bienvenida.css"
export const bienvenida = ({greeting}) => {
    return (
        <div>
            <div className=" d-flex justify-content-center">
                <h1 className="text pb-2">{greeting}</h1>
            </div>
        </div>
    )
}
export default bienvenida