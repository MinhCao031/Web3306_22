import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const headers = [
  { label: 'name', key: 'name' },
  { label: 'username', key: 'username' },
  { label: 'dateOfBirth', key: 'dateOfBirth' },
  { label: 'email', key: 'email' },
  { label: 'phoneNumber', key: 'phoneNumber' },
  { label: 'parentPhoneNumber', key: 'parentPhoneNumber' },
  { label: 'gpa', key: 'gpa' },
  { label: 'drl', key: 'drl' },
];

function FileExport({ data }) {
  let cleanedData = data.map((student) => {
    return {
      name: student.name,
      username: student.username,
      dateOfBirth: student.dateOfBirth,
      email: student.email,
      phoneNumber: `'${student.phoneNumber}`,
      parentPhoneNumber: `'${student.parentPhoneNumber}`,
      gpa: student.gpa,
      drl: student.drl,
    };
  });
  return (
    <div>
      <CSVLink
        headers={headers}
        filename="DSSV.csv"
        data={cleanedData}
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
