import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const Body = () => {
  return (
    <Container>
      <h1>Cập nhật mật khẩu</h1>
      <h4>Đổi mật khẩu</h4>
      <div className="input-wrap">
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input type="text" placeholder="Mật khẩu cũ"></Input>
        </InputField>
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input type="text" placeholder="Mật khẩu mới"></Input>
        </InputField>
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input type="text" placeholder="Nhập lại mật khẩu mới"></Input>
        </InputField>
      </div>
      <div className="button-wrap">
        <Button>Cập nhật</Button>
        <Button>Hủy</Button>
      </div>
    </Container>
  );
};
const iconStyle = {
  position: 'absolute',
  top: '25px',
  left: '90px',
  color: '#808180',
};
const Container = styled.div`
  background-color: white;
  width: 492px;
  margin: 50px auto;
  border-radius: 27px;
  box-shadow: 0 0 12px 0 hsl(0deg 0% 48% / 45%);
  .input-wrap {
    display: flex;
    flex-direction: column;
  }
  .button-wrap {
    display: flex;
    justify-content: flex-end;
    margin-right: 60px;
  }
  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 500;
    font-size: 45px;
    padding-top: 30px;
  }
  h4 {
    padding: 8px 0 10px 45px;
    font-size: 20px;
    font-weight: 400;
    color: #404e68;
  }
`;
const Button = styled.button`
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  color: #f6f5f5;
  background-image: linear-gradient(to right, #4ee5e8, #a083fd);
  transition-timing-function: ease-in;
  margin: 20px 0px 20px 10px;
  &:hover {
    color: rgb(115, 129, 143);
  }
  cursor: pointer;
`;
const Input = styled.input`
  display: block;
  padding: 15px 80px;
  margin: 8px 50px;
  border-radius: 30px;
  background-color: #e6e6e6;
  border: none;
  font-size: 19px;
  transition-timing-function: ease-in-out;
  &:active {
    border: 2px solid #0ba1f5;
  }
`;
const InputField = styled.div`
  position: relative;
`;
export default Body;
