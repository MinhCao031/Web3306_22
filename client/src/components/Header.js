import React from 'react';
import styled from 'styled-components';
import uet_logo from '../assets/uet_logo.png';
const Header = () => {
  return (
    <Container>
      <img src={uet_logo} alt="uet_logo" />
      <div>
        <h1>Trường Đại học Công nghệ</h1>
        <h4>Đại học Quốc gia Hà Nội</h4>
      </div>
    </Container>
  );
};
const Container = styled.header`
  display: flex;
  img {
    margin: 25px 15px 25px 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    color: rgba(53, 115, 171, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h1,
  h4 {
    font-weight: 700;
  }
`;
export default Header;
