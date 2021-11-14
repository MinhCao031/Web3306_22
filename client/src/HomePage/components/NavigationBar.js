import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';

import './NavigationBar.css';
import boy from '../../assets/boy_ava.png';
import DropdownAva from './DropdownAva';

function NavigationBar() {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="navigationbar">
      <div className="profile">
        <IoIcons.IoMdNotifications
          style={{ color: '#404E68', cursor: 'pointer' }}
          size={30}
        />
        <span className="profile-text">{'Nguyen Van Quang'}</span>
        <div onClick={showDropdown}>
          <img className="avatar" alt={'Avatar'} src={boy} />
          {dropdown && <DropdownAva />}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
