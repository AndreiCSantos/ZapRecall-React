import logo from '../assets/logo.png'
import styled from 'styled-components'
import React from 'react';

export default function Header() {

    return (
        <HeaderContainer>
            <Logo src={logo} alt="ZapRecall" />
            <Title>ZapRecall</Title>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  color: #fff;
  font-family: 'Righteous', sans-serif;
`;