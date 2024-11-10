import React, { useState } from 'react';
import Header from './Header';
import FlashcardList from './FlashcardList';
import Counter from './Counter';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyle from './GlobalStyle'

export default function ZapRecallContainer() {
    const [flashcards, setFlashcards] = useState([
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]);

    const [answeredCount, setAnsweredCount] = useState(0);

    const handleAnswer = (index, status) => {
        // Lógica para marcar a resposta e atualizar o estado
        setFlashcards(prevFlashcards =>
            prevFlashcards.map((flashcard, idx) =>
                idx === index ? { ...flashcard, status } : flashcard
            )
        );
        setAnsweredCount(prevCount => prevCount + 1); // Incrementa o contador apenas se a resposta foi dada
    };

    return (
        <Container>
          <GlobalStyle />
          <Header />
          <FlashcardList flashcards={flashcards} onAnswer={handleAnswer} />
          <Counter answeredCount={answeredCount} totalCount={flashcards.length} />
        </Container>
      );
}

// Estilizando o container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


