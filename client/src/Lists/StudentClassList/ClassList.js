import React from 'react';
import SidebarStudent from '../../HomePage/components/SidebarStudent';
import NavigationBar from '../../HomePage/components/NavigationBar';
import { Container } from '../../HomePage/TeacherHomePage';
import Footer from '../../HomePage/components/Footer';
import Table from './Table';
const ClassList = () => {
  return (
    <Container>
      <NavigationBar />
      <Table />
      <SidebarStudent />
      <Footer />
    </Container>
  );
};

export default ClassList;
