import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Trang chủ',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Diễn đàn',
        path: '/forum',
        icon: <MdIcons.MdForum />,
        cName: 'nav-text'
    },
    {
        title: 'Danh sách lớp',
        path: '/class-list',
        icon: <MdIcons.MdClass />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdIcons.MdDashboard />,
        cName: 'nav-text'
    }
];