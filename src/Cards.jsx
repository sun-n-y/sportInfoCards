import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <>
      <main>
        {cards.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </main>
    </>
  );
};
export default Cards;
