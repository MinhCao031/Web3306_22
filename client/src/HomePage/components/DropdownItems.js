// import essentials
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
        path: '/changeInfo',
        icon: <ImIcons.ImWrench className="icon" />,
        cname: 'dropdown-link'
    },
    {
        title: 'Cập nhật mật khẩu',
        path: '/changePassword',
        icon: <IoIcons.IoMdLock className="icon" />,
        cname: 'dropdown-link'
    },
    {
        title: 'Đăng xuất',
        path: '/',
        icon: <MdIcons.MdOutlineLogout className="icon" />,
        cname: 'dropdown-link'
    }
]