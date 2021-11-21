import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavigationBar from '../../HomePage/components/NavigationBar';
import Sidebar from '../../HomePage/components/Sidebar';
import validator from 'validator';
function changeDateFormat(responseDate) {
  var date = new Date(responseDate);
  var day = date.getUTCDate();
  var month = date.getUTCMonth() + 1;
  var year = date.getFullYear();

  month = (month > 9 ? '' : '0') + month;
  day = (day > 9 ? '' : '0') + day;

  return `${year}-${month}-${day}`;
}
function ChangeInfoTeacher() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [introduction, setIntroduction] = useState('');
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/${username}/show`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phoneNumber);
        setDateOfBirth(changeDateFormat(res.data.dateOfBirth));
        setFieldOfStudy(res.data.fieldOfStudy);
        setIntroduction(res.data.introduction);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [successMessage, setSuccessMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
    setNameErrorMessage('');
    setSuccessMessage('');
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErrorMessage('');
    setSuccessMessage('');
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneErrorMessage('');
    setSuccessMessage('');
  };
  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
    setSuccessMessage('');
  };
  const handleFieldOfStudy = (e) => {
    setFieldOfStudy(e.target.value);
    setSuccessMessage('');
  };
  const handleIntroduction = (e) => {
    setIntroduction(e.target.value);
    setSuccessMessage('');
  };
  const stringContainsNumber = (_string) => {
    return /\d/.test(_string);
  };
  const ref = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    if (
      validator.isEmail(email) &&
      validator.isMobilePhone(phone, 'vi-VN') &&
      !stringContainsNumber(name)
    ) {
      axios
        .post(`http://localhost:5000/api/users/${username}/update`, {
          email: email,
          name: name,
          phoneNumber: phone,
          dateOfBirth: dateOfBirth,
          fieldOfStudy: fieldOfStudy,
          introduction: introduction,
        })
        .then((res) => {
          if (res.data.success) {
            setSuccessMessage('Cập nhật thông tin thành công');
          }
        })
        .catch((err) => {
          setSuccessMessage('Cập nhật thông tin thất bại');
          console.log(err);
        });
    }
    if (stringContainsNumber(name)) {
      setNameErrorMessage('Tên không được chứa số');
    }
    if (!validator.isEmail(email)) {
      setEmailErrorMessage('Email không hợp lệ');
    }
    if (!validator.isMobilePhone(phone, 'vi-VN')) {
      setPhoneErrorMessage('Số điện thoại không hợp lệ');
    }
    e.preventDefault();
  };
  return (
    <Wrapper>
      <NavigationBar />
      <Container>
        <h1> Thông tin cá nhân </h1>
        <div className="line">
          <div className="FullName">
            <p className="FieldToChange">
              Họ và tên: <Red>*</Red>
              {nameErrorMessage && (
                <ErrorMessage>{nameErrorMessage}</ErrorMessage>
              )}
            </p>
            <div className="Field2">
              <Input
                name="FullName"
                id="FullName"
                style={{ width: '400px', height: '55px;' }}
                value={name}
                type="text"
                onChange={handleName}
              />
            </div>
          </div>
          <div className="DateOfBirth">
            <p className="FieldToChange">
              Ngày sinh: <Red>*</Red>
            </p>
            <div className="Field2">
              {/* <Input
                name="Day"
                id="Day"
                style={{ width: '100px', height: '55px' }}
                placeholder="01"
              />
              <p className="Slash">/</p>
              <Input
                name="Month"
                id="Month"
                style={{ width: '100px', height: '55px' }}
                placeholder="01"
              />
              <p className="Slash">/</p>
              <Input
                name="Year"
                id="Year"
                style={{ width: '100px', height: '55px' }}
                placeholder="2000"
              /> */}
              <Input
                name="FullName"
                id="FullName"
                style={{ width: '400px', height: '55px' }}
                type="text"
                value={dateOfBirth}
                ref={ref}
                onFocus={() => (ref.current.type = 'date')}
                onBlur={() => {
                  ref.current.type = 'text';
                  ref.current.value = dateOfBirth;
                }}
                onChange={handleDateOfBirth}
              />
            </div>
          </div>
        </div>

        <div className="line">
          <div className="Email">
            <p className="FieldToChange">
              Email: <Red>*</Red>
              {emailErrorMessage && (
                <ErrorMessage>{emailErrorMessage}</ErrorMessage>
              )}
            </p>
            <div className="Field2">
              <Input
                name="Email"
                id="Email"
                style={{ width: '400px', height: '55px;' }}
                value={email}
                type="email"
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="Identifier">
            <p className="FieldToChange">Mã số giảng viên/sinh viên: </p>
            <div className="Field2">
              <Input
                name="ConstID"
                id="ConstID"
                type="text"
                value={username}
                disabled
                style={{
                  width: '400px',
                  height: '55px',
                  backgroundColor: '#404E68',
                  color: 'white',
                }}
              />
            </div>
          </div>
        </div>

        <div className="line">
          <div className="Major">
            <p className="FieldToChange">Chuyên ngành: </p>
            <div className="Field2">
              <Input
                name="Major"
                id="Major"
                type="text"
                style={{ width: '400px', height: '55px;' }}
                value={fieldOfStudy}
                onChange={handleFieldOfStudy}
              />
            </div>
          </div>
          <div className="Phone">
            <p className="FieldToChange">
              Số điện thoại:
              {phoneErrorMessage && (
                <ErrorMessage>{phoneErrorMessage}</ErrorMessage>
              )}
            </p>
            <div className="Field2">
              <Input
                name="Phone"
                id="Phone"
                type="tel"
                style={{ width: '400px', height: '55px;' }}
                value={phone}
                onChange={handlePhone}
              />
            </div>
          </div>
        </div>

        <div className="desc">
          <div className="Description">
            <p className="FieldToChange">Giới thiệu: </p>
            <div className="Field1">
              <Textarea
                type="textarea"
                name="Description"
                id="Description"
                style={{ width: '900px', height: '140px' }}
                value={introduction}
                onChange={handleIntroduction}
              ></Textarea>
            </div>
          </div>
        </div>
        {successMessage &&
          (successMessage === 'Cập nhật thông tin thành công' ? (
            <SuccessMessage style={{ color: 'blue' }}>
              {successMessage}
            </SuccessMessage>
          ) : (
            <SuccessMessage style={{ color: 'red' }}>
              {successMessage}
            </SuccessMessage>
          ))}
        <div className="wrapper">
          <Button id="submit" onClick={handleSubmit}>
            <p className="Submit">Cập nhật</p>
          </Button>
          <Button
            id="cancel"
            onClick={(e) => {
              e.preventDefault();
              history.push('/teacherHomepage');
            }}
          >
            <p className="Cancel">Hủy</p>
          </Button>
        </div>
      </Container>
      <Sidebar />
    </Wrapper>
  );
}
const SuccessMessage = styled.p`
  text-align: center;
  font-size: 22px;
  margin: 0;
`;
const ErrorMessage = styled.span`
  text-align: center;
  font-size: 18px;
  color: red;
`;
const Textarea = styled.textarea`
  border: 1px solid #cddedf;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  transition-timing-function: ease-in-out;
  padding: 10px 10px;
  margin: 0px 0px;
  &:active {
    border: 1px solid #0ba1f5;
  }
`;
const Red = styled.span`
  color: red;
  margin-left: 0px;
`;
const Wrapper = styled.div`
  background-color: #f4f5fa;
`;
const Container = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: 50px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.3px;
    text-align: center;
    margin: 0px 0px 0px 0px;
  }
  div {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: left;
    letter-spacing: 0.3px;
  }
  div > div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
  }
  div > div > div {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0px 0px;
  }
  div > div > .FieldToChange {
    position: left;
    line-height: 28px;
    width: 450px;
  }

  .line,
  .desc {
    margin: 50px 0px 50px 0px;
  }
  .wrapper {
    width: 100%;
    margin: 10px 0px 10px 0px;
    display: flex;
    justify-content: flex-end;
  }
  .Field {
    background: #ffffff;
    border: 1px solid #cddedf;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .Field1 {
    width: 900px;
    height: 140px;
  }
  .Field2 {
    width: 400px;
    height: 55px;
  }

  .Submit {
    margin: 0px 0px;
    width: 180px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    background: #30c563;
    &:hover {
      color: rgb(51, 255, 119);
    }
  }
  .Cancel {
    margin: 0px 0px;
    width: 180px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    background: #e85656;
    &:hover {
      color: rgb(255, 127, 127);
    }
  }
  #Day,
  #Month,
  #Year,
  .Slash {
    margin: 0px 16px 0px 0px;
  }
  .Slash {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 55px;
  }
`;

const Input = styled.input`
  border: 1px solid #cddedf;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  transition-timing-function: ease-in-out;
  padding: 10px 10px;
  margin: 0px 0px;
  &:active {
    border: 1px solid #0ba1f5;
  }
`;

const Button = styled.button`
  margin-right: 40px;
  width: 184px;
  height: 54px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
`;

export default ChangeInfoTeacher;
