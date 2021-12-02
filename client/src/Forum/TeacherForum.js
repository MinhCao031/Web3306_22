import React from 'react';
import Sidebar from '../HomePage/components/Sidebar';
import NavigationBar from '../HomePage/components/NavigationBar';
import ModalBtn from './Posts/ModalBtn';
import BoxPost from './components/Boxpost';
import './studentForum.css';
const TeacherForum = () => {
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
          />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className="postMenuWrapper">
            <BoxPost />
            <BoxPost />
            <BoxPost />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default TeacherForum;
