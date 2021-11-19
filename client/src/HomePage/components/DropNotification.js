import React, { useState } from 'react';
import { DropNotiItems } from './DropNotiItems';
import { Link } from 'react-router-dom';
import './DropNotification.css';

function DropdownNotification() {
  const [seen, setSeen] = useState([false, true, false, true]);

  const setAllUnread = () => {
    let allFalse = [false, false, false, false];
    setSeen(allFalse);
    console.log(seen);
  }
  const setAllRead = () => {
    let allTrue = [true, true, true, true];
    setSeen(allTrue);
    console.log(seen);
  }
  const setRead = (index) => () => {
    let status = [...seen];
    status[index] = true;
    setSeen(status);  
    console.log(seen);
  }

  return (
    <div>
      <ul className="drop-noti">
        <li className="noti-header">
            <p class="notification" onClick={setAllUnread}>
              Thông báo
            </p>
            <p class="set-all-read" onClick={setAllRead}>
              Đánh dấu là tất cả đã đọc
            </p>
        </li>
        {DropNotiItems.map((item, index) => {
          return (
            <li key={index} onClick = {setRead(index)}
              className={seen[index]? item.cnameSeen: item.cnameUnseen}
            >
              <Link to={item.path}>
                <span> 
                  {item.content} 
                </span>
                <div className={seen[index]? "old-noti": "new-noti"}>
                  {item.icon}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownNotification;
