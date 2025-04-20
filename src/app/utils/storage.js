export const saveCards = (cards) => {
    localStorage.setItem('flashcards', JSON.stringify(cards));
  };
  
  export const loadCards = () => {
    const saved = localStorage.getItem('flashcards');
    return saved ? JSON.parse(saved) : [];
  };