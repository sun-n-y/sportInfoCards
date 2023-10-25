import { useState } from 'react';

const Card = ({ id, name, info, image, price, removeCard }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <div
      className="single-card"
      style={{ border: '2px solid blue', margin: '1rem 0', padding: '.3rem' }}
    >
      <img
        src={image}
        style={{ height: '9rem', width: '100%', objectFit: 'cover' }}
        alt={name}
      />
      <h4>{name}</h4>
      <p>
        {readMore ? info.substring(0, 200) : info}...
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'read more' : 'read less'}
        </button>
      </p>
      <p>${price}</p>
      <button
        type="button"
        onClick={() => {
          removeCard(id);
        }}
      >
        not interested
      </button>
    </div>
  );
};
export default Card;
