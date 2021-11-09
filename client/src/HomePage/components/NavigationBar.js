import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

import './NavigationBar.css';
import boy from '../../assets/boy_ava.png';
import DropdownAva from './DropdownAva';

function NavigationBar() {
    const [dropdown, setDropdown] = useState(false);
	const showDropdown = () => setDropdown(!dropdown);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="navigationbar">
            <Link to="#" className={sidebar ? 'menu-bars active' : 'menu-bars'}>
                <AiIcons.AiOutlineBars
                    onClick={showSidebar}
                    style={{ color: '#404E68' }}
                />
            </Link>
            <div className="profile">
                <IoIcons.IoMdNotifications style={{ color: '#404E68' }} size={30} />
                <span className="profile-text">{'Nguyen Van Quang'}</span>
                <div onClick={showDropdown}>
                    <img className='avatar' alt={'Avatar'} src={boy} />
                    {dropdown && <DropdownAva />}
                </div>
            </div>
        </div>
    )
}

export default NavigationBar
