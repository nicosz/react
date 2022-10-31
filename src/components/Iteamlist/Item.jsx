const Itemlist = ({ titleDeProductos, title, price, image}) => {
  return (
    <div>
      <h1>{titleDeProductos}</h1>
      <h3>{title}</h3>
      <p>{price}</p>
      <img className="img-fluid" src={image} alt="" />
      <div className="d-flex justify-content-center ">
      </div>

    </div>
  )
}

export default Itemlist