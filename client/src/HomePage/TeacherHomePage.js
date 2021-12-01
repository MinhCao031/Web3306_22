import React from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Footer from './components/Footer';
const TeacherHomePage = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <img
          src="https://www.thelawofattraction.com/wp-content/uploads/quote1.jpg"
          alt="picture"
          width="50%"
        />
        <Footer />
      </Container>
      <Sidebar />
    </>
  );
};
export const Container = styled.div`
  background-color: #f4f5fa;
  width: 100%;
`;
export default TeacherHomePage;
