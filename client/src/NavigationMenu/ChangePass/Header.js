import React from 'react';
import styled from 'styled-components';
import uet from '../../assets/uet.png';
import boy from '../../assets/boy_ava.png';
import './ChangePass.css';

const Name = 'Nguyen Van Quang';
const Header = () => {
  return (
    <Container>
      <div className="logo">
        <img src={uet} alt="uet_logo" />
        <span>UET - SMTA</span>
      </div>
      <div className="profile">
        <span className="profile-text">{Name}</span>
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
