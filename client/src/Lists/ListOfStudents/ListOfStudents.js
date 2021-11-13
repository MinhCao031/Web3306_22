import React from 'react';
import Table from './Table';
import Sidebar from '../../HomePage/components/Sidebar';
import NavigationBar from '../../HomePage/components/NavigationBar';
import { Container } from '../../HomePage/TeacherHomePage';
const ListOfStudents = () => {
  return (
    <>
      <Container>
        <NavigationBar />
        <Table />
        <Sidebar />
      </Container>
    </>
  );
};

export default ListOfStudents;
