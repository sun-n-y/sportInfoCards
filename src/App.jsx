import { useEffect, useState } from 'react';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

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

  console.log(cards);

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

  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default App;
