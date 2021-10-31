import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import git_logo from '../assets/git_logo.png';
const Body = () => {
  return (
    <Container>
      <img src={git_logo} alt="git_logo" />
      <Form />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  img {
    margin: 58px 65px 120px 91px;
  }
`;
export default Body;
