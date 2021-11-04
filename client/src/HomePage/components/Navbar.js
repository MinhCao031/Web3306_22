import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import boy from '../../assets/boy_ava.png';
import logo from '../../assets/uet.png';
import ChangeInfoTeacher from '../../NavigationMenu/ChangeInfo/ChangeInfoTeacher';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Navbar({ dataDisplay }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const contentWidth = window.innerWidth;
  const contentWidthActive = window.innerWidth - 260;

  return (
    <>
      <IconContext.Provider value={{ color: '#D6D5EE' }}>
        <div className="navbar">
          <Link to="#" className={sidebar ? 'menu-bars active' : 'menu-bars'}>
            <AiIcons.AiOutlineBars
              onClick={showSidebar}
              style={{ color: '#404E68' }}
            />
          </Link>
          <div className="profile">
            <IoIcons.IoMdNotifications style={{ color: '#404E68' }} size={30} />
            <span className="profile-text">
              {/* {`${dataDisplay.firstName} ${dataDisplay.lastName}`} */}
              Mai Nhật Quang
            </span>
            <img alt={'Avatar'} src={boy} />
          </div>
        </div>
      </IconContext.Provider>
      <div
        className={sidebar ? 'content active' : 'content'}
        style={
          sidebar
            ? { maxWidth: contentWidthActive }
            : { maxWidth: contentWidth }
        }
      >
        {/* add content like <Forum />
        <img
          src={
            'https://static.bongda24h.vn/medias/standard/2021/10/22/bruno-fernandes-len-tieng-ve-tuong-lai-hlv-solskjaer.jpg'
          } alt="test"/>
        <span>
          I will add random shit here just to test if my sidebar and content is
          working perfectly. You don't need to read this anymore. Why do you
          still read? I said STOP!! Hey, I am not messing with you, you need to
          stop reading right fk now. So you just won't give up, will you? Okay,
          whatever, suit yourself
        </span> */}
        <Router><Switch>
          <Route path="/teacherHomepage" exact>
          </Route>
          <Route path="/teacherHomepage/ChangeInfo">
              <ChangeInfoTeacher />
          </Route>
        </Switch></Router>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="homepage">
          <Link to="/" className="uet-logo">
            <img alt={'uet-logo'} src={logo} />
            <span>UET - SMTA</span>
          </Link>
        </div>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
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
