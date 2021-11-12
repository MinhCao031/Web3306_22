import React from 'react';
import ClassName from './ClassName';
import Table from './Table';
import Sidebar from '../../HomePage/components/Sidebar';
import NavigationBar from '../../HomePage/components/NavigationBar';

const ListOfStudents = () => {
  return (
    <>
      <NavigationBar />
      <ClassName />
      <Table />
      <Sidebar />
    </>
  );
};
export default ListOfStudents;
