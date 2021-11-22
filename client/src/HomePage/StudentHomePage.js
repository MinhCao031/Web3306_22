import React from 'react';
import NavigationBar from './components/NavigationBar';
import SidebarStudent from './components/SidebarStudent';
import { Container } from './TeacherHomePage';

import Footer from './components/Footer';
function StudentHomePage() {
  return (
    <>
      <NavigationBar />
      <Container>
        <img
          src="https://www.thelawofattraction.com/wp-content/uploads/quote1.jpg"
          alt="picture"
          width="100%"
        />
      </Container>
      <SidebarStudent />
      <Footer />
    </>
  );
}
export default StudentHomePage;
