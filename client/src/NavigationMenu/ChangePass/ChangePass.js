import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from '../../SignInPage/Footer';
import './ChangePass.css';
import { Container } from '../../HomePage/TeacherHomePage';
const ChangePass = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Container>
    </>
  );
};
export default ChangePass;
