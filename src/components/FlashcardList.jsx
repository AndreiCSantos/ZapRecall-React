import Flashcard from "./Flashcard"
import React from 'react';

export default function FlashcardList({ flashcards, onAnswer }) {

    return (
        <div>
            {flashcards.map((flashcard, index) => (
                <Flashcard
                    key={index}
                    flashcard={flashcard}
                    onAnswer={onAnswer}
                    index={index}
                />
            ))}
        </div>
    )
}