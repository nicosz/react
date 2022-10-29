const Itemlist = ({ title, price,image}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default Itemlist