import React from 'react';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

export const DropdownItems = [
    {
        title: 'Tài khoản',
        path: '#',
        icon: null,
        cname: 'dropdown-link'
    },
    {
        title: 'Cập nhật thông tin',
        path: '/teacherHomepage/changeInfo',
        icon: <ImIcons.ImWrench/>,
        cname: 'dropdown-link'
    },
    {
        title: 'Cập nhật mật khẩu',
        path: '/teacherHomepage/changePassword',
        icon: <IoIcons.IoMdLock />,
        cname: 'dropdown-link'
    },
    {
        title: 'Đăng xuất',
        path: '/',
        icon: <MdIcons.MdOutlineLogout />,
        cname: 'dropdown-link'
    }
]