import React from 'react';
import NotiItem from './NotiItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { color, margin } from '@mui/system';
import { blue } from '@mui/material/colors';

export const DropNotiItems = [
    {
        content: <NotiItem/>,
        icon: <FontAwesomeIcon icon={faCircle} size="xs" 
            style={{
                color: '#2247cb',
                margin: '20px 20px'
            }}
        />,
        path: '/teacherHomepage/forum',
        cnameSeen: 'dropnoti-link-seen',
        cnameUnseen: 'dropnoti-link-unseen'
    },
    {
        content: <NotiItem/>,
        icon: <FontAwesomeIcon icon={faCircle} size="xs"
            style={{
                color: '#2247cb',
                margin: '20px 20px'
            }}
        />,
        path: '/teacherHomepage/forum',
        cnameSeen: 'dropnoti-link-seen',
        cnameUnseen: 'dropnoti-link-unseen'
    },
    {
        content: <NotiItem/>,
        icon: <FontAwesomeIcon icon={faCircle} size="xs"
            style={{
                color: '#2247cb',
                margin: '20px 20px'
            }}
        />,
        path: '/teacherHomepage/forum',
        cnameSeen: 'dropnoti-link-seen',
        cnameUnseen: 'dropnoti-link-unseen'
    },
    {
        content: <NotiItem/>,
        icon: <FontAwesomeIcon icon={faCircle} size="xs"
            style={{
                color: '#2247cb',
                margin: '20px 20px'
            }}
        />,
        path: '/teacherHomepage/forum',
        cnameSeen: 'dropnoti-link-seen',
        cnameUnseen: 'dropnoti-link-unseen'
    },
]