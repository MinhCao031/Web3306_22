import React, { useState, useEffect } from 'react';
import * as IoIcons from 'react-icons/io';

import './NavigationBar.css';
import boy from '../../assets/boy_ava.png';
import DropdownAva from './DropdownAva';
import DropNotification from './DropNotification';
import axios from 'axios';

function NavigationBar() {
  const name = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).name
    : 'Anonymous';
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const [dropdown, setDropdown] = useState(false);
  const [showNoti, setShowNoti] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const showDropdown = () => {
    setDropdown(!dropdown);
    setShowNoti(false);
  };
  const showNotification = () => {
    setDropdown(false);
    setShowNoti(!showNoti);
  };
  useEffect(() => {
    if (showNoti) {
      axios
        .get(`/notifications/show/${username}`)
        .then((res) => {
          console.log(res.data);
          setNotificationList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [showNoti]);
  return (
    <div className="navigationbar">
      <div className="profile">
        <IoIcons.IoMdNotifications
          onClick={showNotification}
          style={{ color: '#404E68', cursor: 'pointer' }}
          size={30}
        />
        {showNoti && (
          <DropNotification
            notificationList={notificationList}
            setNotificationList={setNotificationList}
          />
        )}
        <span className="profile-text">{name}</span>
        <div onClick={showDropdown}>
          <img className="avatar" alt={'Avatar'} src={boy} />
          {dropdown && <DropdownAva />}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
