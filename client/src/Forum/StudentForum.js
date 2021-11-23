import React from 'react';
import SidebarStudent from '../HomePage/components/SidebarStudent';
import NavigationBar from '../HomePage/components/NavigationBar';
const StudentForum = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://www.csp.org.uk/sites/default/files/media-image/2019-05/forum_discussion.jpg"
          alt="Day la forum"
        />
      </div>
      <SidebarStudent />
    </>
  );
};

export default StudentForum;
