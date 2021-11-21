import React from 'react';
import NavigationBar from './components/NavigationBar';
import SidebarStudent from './components/SidebarStudent';
import { Container } from './TeacherHomePage';

import Footer from './components/Footer';
function StudentHomePage() {
  return (
    <>
      <NavigationBar />
      <SidebarStudent />
      <Container />
      <Footer />
    </>
  );
}
export default StudentHomePage;
