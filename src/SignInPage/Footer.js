import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Container>
      &copy; Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội
    </Container>
  );
};
const Container = styled.footer`
  text-align: center;
  color: #7a7d81;
  padding-bottom: 15px;
`;
export default Footer;
