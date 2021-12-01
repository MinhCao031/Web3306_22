import React from 'react';
import Header from './Header';
import Body from './Body';
import './ChangePass.css';
import { Container } from '../../HomePage/TeacherHomePage';
import NavigationBar from '../../HomePage/components/NavigationBar';

const ChangePass = () => {
  return (
    <>
      <Container>
        {/* <Header></Header> */}
        <NavigationBar />
        <Body></Body>
      </Container>
    </>
  );
};
export default ChangePass;
