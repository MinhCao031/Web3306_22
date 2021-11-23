import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Real
// const headers = [
//   { label: 'Họ và tên', key: 'name' },
//   { label: 'MSSV', key: 'username' },
//   { label: 'Chức vụ', key: 'level' },
//   { label: 'Ngày sinh', key: 'dateOfBirth' },
//   { label: 'Giới tính', key: 'gender' },
//   { label: 'Nơi sinh', key: 'hometown' },
//   { label: 'GPA', key: 'gpa' },
//   { label: 'ĐRL', key: 'drl' },
// ];
const headers = [
  { label: 'name', key: 'name' },
  { label: 'username', key: 'username' },
  { label: 'level', key: 'level' },
  { label: 'dateOfBirth', key: 'dateOfBirth' },
  { label: 'gender', key: 'gender' },
  { label: 'hometown', key: 'hometown' },
  { label: 'gpa', key: 'gpa' },
  { label: 'drl', key: 'drl' },
];

// Experiment
// const headers = [
//   { label: 'UserID', key: 'userID' },
//   { label: 'Id', key: 'id' },
//   { label: 'Title', key: 'title' },
// ];

const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
  ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
  : '';
const username = JSON.parse(sessionStorage.getItem('user'))
  ? JSON.parse(sessionStorage.getItem('user')).username
  : '';
class FileExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.csvLinkEl = React.createRef();
  }

  downloadReport = async () => {
    axios
      .post(`http://localhost:5000/api/classes/students`, null, {
        params: {
          class_id: classId,
          role: 'Teacher',
          user_id: username,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data }, () => {
          setTimeout(() => {
            this.csvLinkEl.current.link.click();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <button
          id="file-download-button"
          type="button"
          value="Download File"
          className="custom-file-download"
          onClick={this.downloadReport}
        >
          <FontAwesomeIcon
            icon={faDownload}
            size="lg"
            style={{ marginRight: '10px' }}
          />
          Download File
        </button>
        <CSVLink
          headers={headers}
          filename="DSSV2.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default FileExport;
