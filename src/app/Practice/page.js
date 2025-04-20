'use client'
import { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import Navbar from '../components/Navbar'
import { loadCards } from '../utils/storage';

export default function Practice() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCards(loadCards());
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="container">
                <Navbar />
      <h1>Practice Mode</h1>
      {cards.length > 0 ? (
        <>
          <Flashcard 
            question={cards[currentIndex].question} 
            answer={cards[currentIndex].answer} 
          />
          <div className="controls">
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
          </div>
          <p>Card {currentIndex + 1} of {cards.length}</p>
        </>
      ) : (
        <p>No flashcards found. Create some first!</p>
      )}
    </div>
  );
}