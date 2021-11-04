import React from 'react';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router';
const TeacherHomePage = () => {
  const location = useLocation();
  return <Navbar dataDisplay={location.state} />;
};

export default TeacherHomePage;
