'use client'
import { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import Navbar from '../components/Navbar'
import { saveCards, loadCards } from '../utils/storage';

export default function Create() {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setCards(loadCards());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCards = [...cards, { question, answer }];
    setCards(newCards);
    saveCards(newCards);
    setQuestion('');
    setAnswer('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedCards = cards.filter((_, index) => index !== indexToDelete);
    setCards(updatedCards);
    saveCards(updatedCards);
  };

  return (
    <div className="container">
                <Navbar />
      <h1>Create Flashcards</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit">Add Card</button>
      </form>

      <div className="flashcard-list">
        {cards.map((card, index) => (
          <div key={index} className="flashcard-item">
            <Flashcard question={card.question} answer={card.answer} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
