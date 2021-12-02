import React, { useEffect, useState } from 'react';
import SidebarStudent from '../HomePage/components/SidebarStudent';
import NavigationBar from '../HomePage/components/NavigationBar';
import ModalBtn from './Posts/ModalBtn';
import BoxPost from './components/Boxpost';
import './studentForum.css';
import axios from 'axios';
const StudentForum = () => {
  const [posts, setPosts] = useState([]);
  const [headingText, setHeadingText] = useState('');
  const [contentText, setContentText] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={{ bgolor: '#E5E5E5' }}>
        <NavigationBar />
        <div className="titleText">Diễn Đàn </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ModalBtn
            btnName="Đăng bài"
            title="TẠO MỘT BÀI ĐĂNG MỚI"
            submitBtn="Đăng bài"
            headingText={headingText}
            contentText={contentText}
            setHeadingText={setHeadingText}
            setContentText={setContentText}
            onClick={handleAddPost}
          />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className="postMenuWrapper">
            {posts.map((post) => {
              return <BoxPost key={post.id} post={post} />;
            })}
          </div>
        </div>
        <SidebarStudent />
      </div>
    </>
  );
};

export default StudentForum;
