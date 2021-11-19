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
          src="https://uet.vnu.edu.vn/wp-content/uploads/2014/06/banner-web.jpg"
          alt="logo"
          style={{ width: '100%', height: 'auto' }}
        />
      </Container>
      <Sidebar />
      <Footer />
    </>
  );
};
export const Container = styled.div`
  background-color: #f4f5fa;
  width: 100%;
  height: 140vh;
`;
export default TeacherHomePage;
