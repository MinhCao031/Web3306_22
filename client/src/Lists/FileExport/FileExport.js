import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
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

// const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
//   ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
//   : '';
// const username = JSON.parse(sessionStorage.getItem('user'))
//   ? JSON.parse(sessionStorage.getItem('user')).username
//   : '';
function FileExport({ data }) {
  return (
    <div>
      <CSVLink
        headers={headers}
        filename="DSSV.csv"
        data={data}
        className="custom-file-download"
      >
        <FontAwesomeIcon
          icon={faDownload}
          size="lg"
          style={{ marginRight: '10px' }}
        />
        Download File
      </CSVLink>
    </div>
  );
}

export default FileExport;
