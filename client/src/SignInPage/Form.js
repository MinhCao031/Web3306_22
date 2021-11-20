import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import CustomDialog from './CustomDialog';
import axios from 'axios';
import { useHistory } from 'react-router';

const Form = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  let [message, setMessage] = useState('');
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
  const signIn = (e) => {
    const { username, password } = user;
    if (username && password) {
      axios
        .post('http://localhost:5000/api/auth/login', user)
        .then((res) => {
          if (res.data.auth === false) {
            setMessage('Tài khoản hoặc mật khẩu không hợp lệ !');
          } else {
            sessionStorage.setItem('user', JSON.stringify(res.data));
            if (res.data.role === 'Student') {
              history.push({
                pathname: '/studentHomepage',
              });
            } else if (res.data.role === 'Teacher') {
              history.push({
                pathname: '/teacherHomepage',
              });
            }
          }
        })
        .catch((err) => console.log('error'));
    } else {
      setMessage('Vui lòng nhập đầy đủ thông tin !');
    }
    e.preventDefault();
  };
  return (
    <Container>
      <div className="wrapper">
        <h1>UET-SMTA</h1>
        <p>UET Student Management for Teaching Assistant </p>
        <InputField>
          <FontAwesomeIcon icon={faUserCircle} size="lg" style={iconStyle} />
          <Input
            type="text"
            placeholder="Tài khoản"
            name="username"
            value={user.username}
            onChange={handleChange}
            onClick={() => setMessage('')}
          />
        </InputField>
        <InputField>
          <FontAwesomeIcon icon={faLock} size="lg" style={iconStyle} />
          <Input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            value={user.password}
            onChange={handleChange}
            onClick={() => setMessage('')}
          />
        </InputField>
        <div className="wrapper">
          <Button onClick={signIn}>Đăng nhập</Button>
          <CustomDialog
            value="Quên mật khẩu?"
            title="Quên mật khẩu?"
            type="span"
          >
            Vui lòng liên hệ với phòng đào tạo theo số điện thoại 0123456789
            hoặc pđt@gmail.com để được hỗ trợ.
          </CustomDialog>
        </div>
      </div>
      {message && <Message>{message}</Message>}
    </Container>
  );
};
const iconStyle = {
  position: 'absolute',
  top: '20px',
  left: '40px',
  color: '#808180',
};
const Message = styled.div`
  text-align: center;
  color: red;
`;
const Container = styled.form`
  h1 {
    color: rgba(53, 115, 171, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 50px 58px 10px;
    font-size: 50px;
    font-weight: 800;
  }
  p {
    color: rgb(115, 129, 143);
    margin-bottom: 35px;
    font-weight: 700;
  }
  div > .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 35px 40px;
  }
  div > span {
    color: #0ba1f5;
    cursor: pointer;
    text-decoration: underline;
  }
  div > span:hover {
    color: red;
  }
`;
const Input = styled.input`
  display: block;
  padding: 18px 65px;
  margin: 15px 10px;
  border-radius: 30px;
  background-color: #e6e6e6;
  border: none;
  font-size: 19px;
  transition-timing-function: ease-in-out;
  &:active {
    border: 2px solid #0ba1f5;
  }
`;
const Button = styled.button`
  padding: 12px 30px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  color: #f6f5f5;
  background-image: linear-gradient(to right, #9ee7ff, #5ea4ff);
  transition-timing-function: ease-in;
  &:hover {
    color: rgb(115, 129, 143);
  }
  cursor: pointer;
`;
const InputField = styled.div`
  position: relative;
`;
export default Form;
