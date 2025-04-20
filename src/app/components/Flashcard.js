"use client";

import { useState } from 'react';
import styles from "./Flashcard.module.css";

export default function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.front}>{question}</div>
      <div className={styles.back}>{answer}</div>
    </div>
  );
}