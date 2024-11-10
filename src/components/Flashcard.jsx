import React, { useState } from 'react';
import styled from 'styled-components';
import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'
import certo from '../assets/icone_certo.png'
import erro from '../assets/icone_erro.png'
import quase from '../assets/icone_quase.png'

export default function Flashcard({ flashcard, onAnswer, index }) {
  const [sta, setSta] = useState(false)
  const [bk, setBk] = useState(false)
  const [questionRevealed, setQuestionRevealed] = useState(false);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(setaPlay);

  const handleShowAnswer = () => {
    setQuestionRevealed(true)
    setBk(true)
  };

  const handleShowAnswerDetails = () => {
    setAnswerRevealed(true);
    setSta(true)
  };

  const handleAnswerClick = (status) => {
    setAnswered(true);
    onAnswer(index, status);
    setQuestionRevealed(false);
    setAnswerRevealed(false);
    setSta(false)
    setBk(false)

    if (status === 'incorrect') {
      setCurrentIcon(erro);
    } else if (status === 'effort') {
      setCurrentIcon(quase);
    } else if (status === 'correct') {
      setCurrentIcon(certo);
    }
  };

  return (
    <FlashcardContainer bk={bk}>
      <Question status={flashcard.status} sta={sta} >
        <QuestionContent questionRevealed={questionRevealed} bk={bk}>
          {!answered ? (
            !questionRevealed ? `Pergunta ${index + 1}` : flashcard.question
          ) : (
            `Pergunta ${index + 1}`
          )}
          {!questionRevealed &&  (
            <Play onClick={!answered ? handleShowAnswer : null} src={currentIcon} answered={answered} />
          )}

        </QuestionContent>

      </Question>

      {questionRevealed && !answerRevealed && !answered && (
        <Virar src={setaVirar} onClick={handleShowAnswerDetails} />
      )}

      {answerRevealed && !answered && (
        <AnswerButtons>
          <Answer>{flashcard.answer}</Answer>
          <Container>
            <AnswerButton background={'red'} onClick={() => handleAnswerClick('incorrect')}>Não lembrei</AnswerButton>
            <AnswerButton background={'orange'} onClick={() => handleAnswerClick('effort')}>Quase não lembrei</AnswerButton>
            <AnswerButton background={'green'} onClick={() => handleAnswerClick('correct')}>Zap!</AnswerButton>
          </Container>
        </AnswerButtons>
      )}
    </FlashcardContainer>
  );
}


const FlashcardContainer = styled.div`
  padding: 0px 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bk ? '#FFFFD4' : '#fff'};
  width: 280px;
  height: ${props => props.bk ? '180px' : '65px'};
  position: relative;
`;

const Question = styled.div`
  color: #333;
  display: ${props => props.sta ? 'none' : 'block'};
  text-decoration: ${props => props.status ? 'line-through' : ''};
  ${(props) =>
    props.status === 'incorrect' &&
    `
    color: red;
  `}
  ${(props) =>
    props.status === 'effort' &&
    `
    color: orange;
  `}
  ${(props) =>
    props.status === 'correct' &&
    `
    color: green;
  `}
  width: 100%;
  height: 100%;
`;

const QuestionContent = styled.div`
  display: flex;
  align-items: ${props => props.bk ? 'start' : 'center'};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: ${props => props.bk ? '10px' : '0'};
  font-family: 'Recursive', sans-serif;
  font-weight: ${props => props.bk ? '400' : '700'};
`

const Virar = styled.img`
  color: #333;
  width: 20px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 15px;
`

const Play = styled.img`
  color: #333;
  width: 20px;
  height: 23px;
  cursor: ${props => (props.answered ? '' : 'pointer')};
  pointer-events: ${props => (props.answered ? 'none' : 'auto')};
`;

const Answer = styled.div`
  font-size: 18px;
  color: #333;
`;

const AnswerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
    display: flex;
`

const AnswerButton = styled.button`
  margin: 0px 2px;
  padding: 2px 3px;
  width: 95px;
  height: 45px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.background};
  font-family: 'Recursive', sans-serif;
`;
