import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
	{
		title: 'Trang chủ',
		path: '/teacherHomepage',
		icon: <AiIcons.AiFillHome />,
		cName: 'side-text',
		// cName: 'nav-text',
	},
	{
		title: 'Diễn đàn',
		path: 'teacherHomepage/forum',
		icon: <MdIcons.MdForum />,
		cName: 'side-text',
		// cName: 'nav-text',
	},
	{
		title: 'Danh sách lớp',
		path: '/teacherHomepage/class-list',
		icon: <MdIcons.MdClass />,
		cName: 'side-text',
		// cName: 'nav-text',
	},
	{
		title: 'Dashboard',
		path: '/teacherHomepage/dashboard',
		icon: <MdIcons.MdDashboard />,
		cName: 'side-text',
		// cName: 'nav-text',
	},
];
