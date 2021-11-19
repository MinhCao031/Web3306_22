import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styled from 'styled-components';
const SignInForm = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </Wrapper>
  );
};
const Container = styled.div`
  background-color: white;
  width: 960px;
  margin: auto;
  border-radius: 27px;
  box-shadow: 0 0 12px 0 hsl(0deg 0% 48% / 45%);
`;
const Wrapper = styled.div`
  background-color: #f4f5fa;
  height: 120vh;
  display: flex;
`;
export default SignInForm;
