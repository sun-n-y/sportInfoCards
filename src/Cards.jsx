import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
        our tours
      </h1>
      <main style={{ width: '80vw', margin: '0 auto', maxWidth: '1000px' }}>
        {cards.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </main>
    </>
  );
};
export default Cards;
