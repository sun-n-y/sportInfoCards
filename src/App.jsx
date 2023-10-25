import { useEffect, useState } from 'react';
import Loading from './Loading';
import Cards from './Cards';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const removeCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('error in fetch url');
      }
      const data = await response.json();
      setCards(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (cards.length < 1) {
    return (
      <>
        <h1 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
          our tours
        </h1>
        <button
          style={{ margin: '0 auto', display: 'block' }}
          onClick={fetchCards}
        >
          refresh
        </button>
      </>
    );
  }

  return (
    <>
      <Cards cards={cards} removeCard={removeCard} />
    </>
  );
}

export default App;
