import React from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import { Container } from './TeacherHomePage';
import Footer from './components/Footer';
function StudentHomePage() {
  return (
    <>
      <NavigationBar />
      <Container />
      <Sidebar />
      <Footer />
    </>
  );
}
export default StudentHomePage;
