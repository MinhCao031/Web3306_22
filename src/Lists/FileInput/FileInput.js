import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
class FileInput extends Component {
  // needInp = false;
  // showing = () => this.needInp = !this.needInp;

  dataStringLines = [];
  dataHeader = [];

  constructor(props) {
    super(props);
    this.state = {
      inputJson: null,
      inpSuccess: 'No file yet',
    };
  }

  processData = (dataString) => {
    this.setState({ inputJson: null, inpSuccess: false });
    this.dataStringLines = dataString.split(/\r\n|\n/);
    this.headers = this.dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );
    const list = [];
    for (let i = 1; i < this.dataStringLines.length; i++) {
      const row = this.dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (this.headers && row.length === this.headers.length) {
        const obj = {};
        for (let j = 0; j < this.headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (this.headers[j]) {
            if (this.headers[j].length > 0) {
              if (this.headers[j][0] === '"')
                this.headers[j] = this.headers[j].substring(
                  1,
                  this.headers[j].length - 1
                );
              if (this.headers[j][this.headers[j].length - 1] === '"')
                this.headers[j] = this.headers[j].substring(
                  this.headers[j].length - 2,
                  1
                );
            }
            obj[this.headers[j]] = d;
          }
        }
        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }
    this.setState({
      inputJson: list,
      inpSuccess: 'Server not received',
    });
    const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
      ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
      : '';
    let inpjson = this.state.inputJson;
    const cleanPhoneNumber = (phoneNumber) => {
      if (phoneNumber[0] === "'") {
        phoneNumber = phoneNumber.substring(1, phoneNumber.length);
      }
      return phoneNumber;
    };
    inpjson = inpjson.map((student) => {
      return {
        dateOfBirth: student.dateOfBirth,
        drl: student.drl,
        email: student.email,
        gpa: student.gpa,
        name: student.name,
        username: student.username,
        phoneNumber: cleanPhoneNumber(student.phoneNumber),
        parentPhoneNumber: cleanPhoneNumber(student.parentPhoneNumber),
      };
    });
    axios
      .post(`http://localhost:5000/api/classes/${classId}/import`, {
        inpjson,
      })
      .then((res) => {
        console.log(res.data);
        this.props.setData(res.data);
        // if (res.data.status == 'OK') {
        //   this.setState({
        //     inputJson: this.state.inputJson,
        //     inpSuccess: 'Import successfully',
        //   });
        // }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(this.state.inputJson);
    // console.log(this.state.inpSuccess);
  };

  showFile = async (e) => {
    // inputJson = null;
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      this.processData(text);
    };
    try {
      reader.readAsText(e.target.files[0]);
    } catch (error) {
      this.setState({
        inputJson: this.state.inputJson,
        inpSuccess: 'Import failed',
      });
      console.log('ERROR!!!!!');
      console.log(error);
    }
  };

  // showing = needInput => {
  //   if(needInput) needInput = false;
  //   else needInput = true;
  // }
  render = () => {
    //console.log(this.props.setData());
    return (
      <div>
        <label for="file-upload" className="custom-file-upload">
          <FontAwesomeIcon
            icon={faUpload}
            size="lg"
            style={{ marginRight: '10px' }}
          />
          Upload File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => this.showFile(e)}
          style={{ width: '260px', display: 'none' }}
        />
        {/* {this.state.inpSuccess == 'Import successfully' ? (
          <p style={{ color: 'blue' }}>Nhập file thành công</p>
        ) : this.state.inpSuccess == 'Server not received' ? (
          <p style={{ color: 'red' }}>Lỗi máy chủ. Xin vui lòng thử lại</p>
        ) : this.state.inpSuccess == 'Import failed' ? (
          <p style={{ color: 'red' }}>
            Nhập file thất bại. Xin vui lòng thử lại
          </p>
        ) : (
          <></>
        )} */}
      </div>
    );
  };
}

export default FileInput;
