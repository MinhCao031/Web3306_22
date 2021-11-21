import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import axios from 'axios';

const Body = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleChangeOldPass = (e) => {
    setOldPassword(e.target.value);
    setMessage('');
  };
  const handleChangeNewPass = (e) => {
    setNewPassword(e.target.value);
    setMessage('');
  };
  const handleChangeConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
    setMessage('');
  };
  const history = useHistory();
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const handleSubmit = (e) => {
    if (oldPassword && newPassword && confirmPassword) {
      if (oldPassword === newPassword) {
        setMessage('Mật khẩu mới không được trùng với mật khẩu cũ !');
      } else if (newPassword !== confirmPassword) {
        setMessage('Mật khẩu mới và xác nhận mật khẩu không trùng nhau !');
      } else {
        axios
          .post(`http://localhost:5000/api/users/${username}/set_password`, {
            oldPassword: oldPassword,
            newPassword: newPassword,
          })
          .then((res) => {
            if (res.data.success) {
              setMessage('Đổi mật khẩu thành công !');
              setOldPassword('');
              setNewPassword('');
              setConfirmPassword('');
            } else {
              setMessage('Mật khẩu cũ không đúng !');
            }
          })
          .catch((err) => {
            setMessage('Đổi mật khẩu thất bại !');
            console.log(err);
          });
      }
    } else {
      setMessage('Vui lòng nhập đầy đủ thông tin !');
    }
    e.preventDefault();
  };
  return (
    <Container>
      <h1>Cập nhật mật khẩu</h1>
      <h4>Đổi mật khẩu</h4>
      <div className="input-wrap">
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input
            type="password"
            placeholder="Mật khẩu cũ"
            onChange={handleChangeOldPass}
            value={oldPassword}
          ></Input>
        </InputField>
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input
            type="password"
            placeholder="Mật khẩu mới"
            onChange={handleChangeNewPass}
            value={newPassword}
          ></Input>
        </InputField>
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            onChange={handleChangeConfirmPass}
            value={confirmPassword}
          ></Input>
        </InputField>
      </div>
      {message === 'Đổi mật khẩu thành công !' ? (
        <Message style={{ color: 'blue' }}>{message}</Message>
      ) : message ? (
        <Message style={{ color: 'red' }}>{message}</Message>
      ) : null}
      <div className="button-wrap">
        <Button onClick={handleSubmit}>Cập nhật</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            history.push('/teacherHomepage');
          }}
        >
          Hủy
        </Button>
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
const Message = styled.p`
  font-size: 15px;
  margin: 0;
  padding-top: 12px;
  text-align: center;
`;
export default Body;
