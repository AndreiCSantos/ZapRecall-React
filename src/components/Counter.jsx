import React from 'react';
import styled from 'styled-components';

export default function Counter({ answeredCount, totalCount }){
        return (
            <CounterContainer>
                {answeredCount} / {totalCount} concluídos
            </CounterContainer>
        );
}

const CounterContainer = styled.div`

  font-size: 18px;
  color: #333;
  background-color: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  font-family: 'Recursive', sans-serif;
`;
