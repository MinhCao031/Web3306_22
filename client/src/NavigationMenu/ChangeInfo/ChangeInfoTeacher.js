import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
function ChangeInfoTeacher() {
  const handleSubmit = (e) => {};
  //     axios
  //       .post('http://localhost:5000/users/update', {
  //         username: '19021363',
  //         email: 'test@gmail.com',
  //         name: 'Quang',
  //         phoneNumber: '0123456789',
  //         dateOfBirth: '01/01/2000',
  //         fieldOfStudy: 'IT',
  //         introduction: 'I am a student',
  //       })
  //       .then((res) => {
  //         console.log(res.data.status);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     e.preventDefault();
  //   };
  return (
    <Container>
      <h1> Cập nhật thông tin </h1>
      <div className="line">
        <div className="FullName">
          <p className="FieldToChange">Họ và tên: *</p>
          <div class="Field2">
            <Input
              name="FullName"
              id="FullName"
              style={{ width: '400px', height: '55px;' }}
            />
          </div>
        </div>
        <div className="DateOfBirth">
          <p className="FieldToChange">Ngày sinh: *</p>
          <div class="Field2">
            <Input
              name="Day"
              id="Day"
              style={{ width: '100px', height: '55px' }}
            />
            <p class="Slash">/</p>
            <Input
              name="Month"
              id="Month"
              style={{ width: '100px', height: '55px' }}
            />
            <p class="Slash">/</p>
            <Input
              name="Year"
              id="Year"
              style={{ width: '100px', height: '55px' }}
            />
          </div>
        </div>
      </div>

      <div className="line">
        <div className="Email">
          <p className="FieldToChange">Email: *</p>
          <div class="Field2">
            <Input
              name="Email"
              id="Email"
              style={{ width: '400px', height: '55px;' }}
            />
          </div>
        </div>
        <div className="Identifier">
          <p className="FieldToChange">Mã số giảng viên: *</p>
          <div class="Field2">
            <Input
              name="ConstID"
              id="ConstID"
              placeholder="GV21082102"
              disabled
              style={{ width: '400px', height: '55px;' }}
            />
          </div>
        </div>
      </div>

      <div className="line">
        <div className="Major">
          <p className="FieldToChange">Ngành: *</p>
          <div class="Field2">
            <Input
              name="Major"
              id="Major"
              style={{ width: '400px', height: '55px;' }}
            />
          </div>
        </div>
        <div className="Phone">
          <p className="FieldToChange">Số điện thoại: *</p>
          <div class="Field2">
            <Input
              name="Phone"
              id="Phone"
              style={{ width: '400px', height: '55px;' }}
            />
          </div>
        </div>
      </div>

      <div className="desc">
        <div className="Description">
          <p className="FieldToChange">Giới thiệu:</p>
          <div class="Field1">
            <Input
              type="textarea"
              name="Description"
              id="Description"
              style={{ width: '900px', height: '140px' }}
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <Button id="submit" onClick={handleSubmit}>
          <p className="Submit">Cập nhật</p>
        </Button>
        <Button id="cancel">
          <p className="Cancel">Hủy</p>
        </Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  // width: 1500px;
  // float: right;
  h1 {
    font-size: 40px;
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
    position: ralative;
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
  }
  div > div > div {
    position: ralative;
    display: flex;
    flex-direction: row;
    margin: 0px 0px;
  }
  div > div > .FieldToChange {
    position: left;
    line-height: 28px;
    width: 300px;
  }

  .line,
  .desc {
    margin: 50px 0px 50px 0px;
  }
  .wrapper {
    width: 450px;
    margin: 10px 0px 10px 0px;
    position: relative;
    float: right;
    // right: 100px;
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
  background: #ffffff;
  border: 1px solid #cddedf;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #e6e6e6;
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
`;

export default ChangeInfoTeacher;
