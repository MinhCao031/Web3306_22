import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarStudentData = [
  {
    title: 'Trang chủ',
    path: '/studentHomepage',
    icon: <AiIcons.AiFillHome />,
    cName: 'side-text',
  },
  {
    title: 'Diễn đàn',
    path: '/studentHomepage/forum',
    icon: <MdIcons.MdForum />,
    cName: 'side-text',
  },
  {
    title: 'ChatOnline',
    path: '/Messenger',
    icon: <MdIcons.MdForum />,
    cName: 'side-text',
  },
  {
    title: 'Danh sách lớp',
    path: '/studentHomepage/classList',
    icon: <MdIcons.MdClass />,
    cName: 'side-text',
  },
];
