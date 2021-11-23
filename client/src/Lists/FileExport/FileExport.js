import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Real
const headers = [
  { label: 'Họ và tên', key: 'name' },
  { label: 'MSSV', key: 'username' },
  { label: 'Chức vụ', key: 'level' },
  { label: 'Ngày sinh', key: 'dateOfBirth' },
  { label: 'Giới tính', key: 'gender' },
  { label: 'Nơi sinh', key: 'hometown' },
  { label: 'GPA', key: 'gpa' },
  { label: 'ĐRL', key: 'drl' },
];

// Experiment
// const headers = [
//   { label: 'UserID', key: 'userID' },
//   { label: 'Id', key: 'id' },
//   { label: 'Title', key: 'title' },
// ];

let classId = JSON.parse(sessionStorage.getItem('classIdTable'))
  ? JSON.parse(sessionStorage.getItem('classIdTable'))
  : null;
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
      .get(`http://localhost:5000/api/classes/${classId}/students`)
      //.get(`https://jsonplaceholder.typicode.com/albums`)
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
