import React from 'react';
import SidebarStudent from '../../HomePage/components/SidebarStudent';
import NavigationBar from '../../HomePage/components/NavigationBar';
import { Container } from '../../HomePage/TeacherHomePage';
import Footer from '../../HomePage/components/Footer';
import Table from './Table';
const ClassList = () => {
  return (
    <>
      <NavigationBar />
      <Table />
      <SidebarStudent />
      <Footer />
    </>
  );
};
export default ClassList;
