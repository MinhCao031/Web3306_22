import React, { useState } from 'react';
import './DropNotification.css';
import NotiItem from './NotiItem';
function DropdownNotification({ notificationList, setNotificationList }) {
  let cleanedNotificationList = notificationList.map((noti) => {
    return noti.content;
  });
  cleanedNotificationList.reverse();
  return (
    <div>
      <ul className="drop-noti">
        <li className="noti-header">
          <strong class="notification">Thông báo</strong>
        </li>
        <div
          style={{ maxHeight: '210px', overflowX: 'hidden', overflowY: 'auto' }}
        >
          {cleanedNotificationList.map((notification, index) => {
            return (
              <li key={index} className="dropnoti-link-unseen">
                <NotiItem info={notification} />
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default DropdownNotification;
