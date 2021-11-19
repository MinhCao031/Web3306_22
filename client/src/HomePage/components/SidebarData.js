import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/teacherHomepage',
    icon: <AiIcons.AiFillHome />,
    cName: 'side-text',
  },
  {
    title: 'Diễn đàn',
    path: '/teacherHomepage/forum',
    icon: <MdIcons.MdForum />,
    cName: 'side-text',
  },
  {
    title: 'Danh sách lớp',
    path: '/teacherHomepage/classList',
    icon: <MdIcons.MdClass />,
    cName: 'side-text',
  },
  {
    title: 'Thống kê',
    path: '/teacherHomepage/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'side-text',
  },
];
