import React from 'react';
import Sidebar from '../HomePage/components/Sidebar';
import NavigationBar from '../HomePage/components/NavigationBar';
const Forum = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://www.csp.org.uk/sites/default/files/media-image/2019-05/forum_discussion.jpg"
          alt="Day la forum"
        />
      </div>
      <Sidebar />
    </>
  );
};

export default Forum;
