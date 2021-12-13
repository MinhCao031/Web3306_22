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
  useEffect(async () => {
    await axios
      .get('/api/posts')
      .then((res) => {
        if (res.data.message !== 'No posts found') {
          setPosts(res.data);
        }
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
            {posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <BoxPost
                    key={post.id}
                    post={post}
                    posts={posts}
                    setPosts={setPosts}
                  />
                );
              })
            ) : (
              <div>Không có bài đăng</div>
            )}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default TeacherForum;
