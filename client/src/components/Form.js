import React from 'react';
import styled from 'styled-components';
const Form = () => {
  const signIn = () => {
    fetch('localhost:8080')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div>
        <h1>UET-SMTA</h1>
        <p>UET Student Management for Teaching Assistant </p>
        <Input type="text" placeholder="Tài khoản" />
        <Input type="password" placeholder="Mật khẩu" />
        <div>
          <Button onClick={signIn}>Đăng nhập</Button>
          <span>Quên mật khẩu?</span>
        </div>
      </div>
    </Container>
  );
};
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
  div > div {
    margin: 35px 40px;
  }
  div > span {
    margin-left: 35px;
    color: #0ba1f5;
    text-decoration: underline;
    cursor: pointer;
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
  color: #f6f5f5;
  background-image: linear-gradient(to right, #9ee7ff, #5ea4ff);
  font-size: 15px;
  transition-timing-function: ease-in;
  &:hover {
    color: rgb(115, 129, 143);
  }
  cursor: pointer;
`;
export default Form;
