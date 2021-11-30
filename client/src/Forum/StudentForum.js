import React from 'react';
import SidebarStudent from '../HomePage/components/SidebarStudent';
import NavigationBar from '../HomePage/components/NavigationBar';
import BoxPost from './components/Boxpost';

const StudentForum = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BoxPost />

      </div>
      <SidebarStudent />
    </>
  );
};

export default StudentForum;
