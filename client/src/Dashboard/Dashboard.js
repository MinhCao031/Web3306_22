import React from 'react';
import Sidebar from '../HomePage/components/Sidebar';
import NavigationBar from '../HomePage/components/NavigationBar';
import Footer from '../HomePage/components/Footer';
import BarChart from './BarChart';
import PieChart from './PieChart';
const DashBoard = () => {
  return (
    <>
      <NavigationBar />
      <BarChart />
      <PieChart />
      <Sidebar />
      <Footer />
    </>
  );
};
export default DashBoard;
