import React, { useState } from 'react';
import Sidebar from '../HomePage/components/Sidebar';
import NavigationBar from '../HomePage/components/NavigationBar';
import Footer from '../HomePage/components/Footer';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ClassesDropDown from './ClassesDropDown';
const DashBoard = () => {
  const [selectedClassID, setSelectedClassID] = useState();
  return (
    <>
      <NavigationBar />
      <ClassesDropDown setSelectedClassID={setSelectedClassID} />
      <BarChart selectedClassID={selectedClassID} />
      <PieChart selectedClassID={selectedClassID} />
      <Sidebar />
      <Footer />
    </>
  );
};
export default DashBoard;
