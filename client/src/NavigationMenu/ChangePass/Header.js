import React from 'react';
import styled from 'styled-components';
import uet from '../../assets/uet.png';
import boy from '../../assets/boy_ava.png';
import * as IoIcons from 'react-icons/io';
import './ChangePass.css';
const Header = () => {
  return (
    <Container>
      <div className="logo">
        <img src={uet} alt="uet_logo" />
        <span>UET - SMTA</span>
      </div>
      <div className="profile">
        <IoIcons.IoMdNotifications style={{ color: '#404E68' }} size={30} />
        <span className="profile-text">{'Nguyen Van Quang'}</span>
        <img alt="Avatar" src={boy} />
      </div>
    </Container>
  );
};
const Container = styled.header`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export default Header;
