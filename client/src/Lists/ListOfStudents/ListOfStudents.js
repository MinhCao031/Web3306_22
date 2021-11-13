import React from 'react';
import Table from './Table';
import Sidebar from '../../HomePage/components/Sidebar';
import NavigationBar from '../../HomePage/components/NavigationBar';

const ListOfStudents = () => {
  return (
    <>
      <NavigationBar />
      <Table />
      <Sidebar />
    </>
  );
};
export default ListOfStudents;
