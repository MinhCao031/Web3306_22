import React from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Footer from './components/Footer';
const TeacherHomePage = () => {
  return (
    <>
      <NavigationBar />
      <img
        src="https://www.schoology.com/sites/default/files/schoology-learning-management-system.jpg"
        alt="teacher"
        style={{ width: '100%', height: '100%' }}
      />
      <Footer />
      <Sidebar />
    </>
  );
};
export const Container = styled.div`
  background-color: #f4f5fa;
  width: 100%;
  height: 100vh;
`;
export default TeacherHomePage;
