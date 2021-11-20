import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// Real
// const headers = [
//   { label: "Họ và tên", key: "name" },
//   { label: "MSSV", key: "username" },
//   { label: "Chức vụ", key: "level" },
//   { label: "Ngày sinh", key: "dataOfBirth" },
//   { label: "Giới tính", key: "gender" },
//   { label: "Nơi sinh", key: "hometown" },
//   { label: "GPA", key: "gpa" },
//   { label: "ĐRL", key: "drl" },
// ];

// Experiment
const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Username', key: 'username' },
  { label: 'Email', key: 'email' },
  { label: 'Phone', key: 'phone' },
  { label: 'Website', key: 'website' },
];
let classId = JSON.parse(sessionStorage.getItem('classId'))
  ? JSON.parse(sessionStorage.getItem('classId'))
  : null;
class FileExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.csvLinkEl = React.createRef();
  }
  getUserList = () => {
    axios
      .get(`http://localhost:5000/api/classes/${classId}/students`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // return fetch('localhost:3000...') điền link chứa file json cần download vào đây
    //   .then(res => res.json());
  };

  downloadReport = async () => {
    const data = await this.getUserList();
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
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
