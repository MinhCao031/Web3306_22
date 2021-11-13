import React from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import { Container } from './TeacherHomePage';
function StudentHomePage() {
  return (
    <>
      <NavigationBar />
      <Container />
      <Sidebar />
    </>
  );
}
export default StudentHomePage;
