import React, { Component } from 'react';
import { CSVLink } from "react-csv";

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
  { label: "Name", key: "name" },
  { label: "Username", key: "username" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Website", key: "website" }
];

class FileExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json());
    // return fetch('localhost:3000...') điền link chứa file json cần download vào đây
    //   .then(res => res.json());
  }

  downloadReport = async () => {
    const data = await this.getUserList();
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <input type="button" value="Export to CSV" onClick={this.downloadReport} />
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
