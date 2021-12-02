import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../HomePage/components/Sidebar';
import NavigationBar from '../HomePage/components/NavigationBar';
import ModalBtn from './Posts/ModalBtn';
import BoxPost from './components/Boxpost';
import './studentForum.css';
import axios from 'axios';
const TeacherForum = () => {
  const [posts, setPosts] = useState([]);
  const [headingText, setHeadingText] = useState('');
  const [contentText, setContentText] = useState('');
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  useEffect(async () => {
    await axios
      .get('http://localhost:5000/api/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            posts={posts}
            setPosts={setPosts}
          />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className="postMenuWrapper">
            {posts &&
              posts.map((post) => {
                return (
                  <BoxPost
                    key={post.id}
                    post={post}
                    posts={posts}
                    setPosts={setPosts}
                  />
                );
              })}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default TeacherForum;
