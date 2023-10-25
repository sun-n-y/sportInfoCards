const Card = ({ id, name, info, image, price }) => {
  return (
    <div className="single-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{info}</p>
      <span>{price}</span>
    </div>
  );
};
export default Card;
