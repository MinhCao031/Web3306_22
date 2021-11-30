import React from 'react';
import SidebarStudent from '../HomePage/components/SidebarStudent';
import NavigationBar from '../HomePage/components/NavigationBar';
import ModalBtn from './Posts/ModalBtn';

const StudentForum = () => {
    return (
        <>
        <NavigationBar />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ModalBtn 
                btnName="Đăng bài"
                title="TẠO MỘT BÀI ĐĂNG MỚI"
                submitBtn="Đăng bài"
            />
            <ModalBtn 
                btnName=""
                title="SỬA BÀI ĐĂNG"
                submitBtn="Cập nhật"
                headingText="Hỏi thông tin học bổng 100 củ"
                contentText="Em được biết là trường đang phát tiền miễn phí, cho em hỏi thêm thông tin với ạ"
                edit='true'
            />
        </div>
        <SidebarStudent />
        </>
    );

};

export default StudentForum;
