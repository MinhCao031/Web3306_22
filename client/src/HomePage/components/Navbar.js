import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import boy from '../../assets/boy_ava.png';
import logo from '../../assets/uet.png';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import DropdownAva from './DropdownAva';


function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	const [dropdown, setDropdown] = useState(false);
	const showDropdown = () => setDropdown(!dropdown);

return (
		<>
			<div className="navbar">
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
						<img alt={'Avatar'} src={boy} />
						{dropdown && <DropdownAva />}
					</div>
				</div>
			</div>
			<div className="content" >
				{/* add content like <Forum />  */}
				
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<div className="homepage">
					<Link to="/teacherHomepage" className="uet-logo">
						<img alt={'uet-logo'} src={logo} />
						<span>UET - SMTA</span>
					</Link>
				</div>
				<ul className="nav-menu-items">
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path} exact>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
