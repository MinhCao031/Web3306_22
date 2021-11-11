import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './ListOfStudents.css';
const Table = () => {
  const [userList, setUserList] = useState([]);
  const columns = [
    { dataField: 'name', text: 'Họ và tên', sort: true },
    { dataField: 'username', text: 'MSSV', sort: true },
    { dataField: 'level', text: 'Chức vụ', sort: true },
    { dataField: 'dateOfBirth', text: 'Ngày sinh', sort: true },
    { dataField: 'gender', text: 'Giới tính', sort: true },
    { dataField: 'hometown', text: 'Nơi sinh', sort: true },
    { dataField: 'gpa', text: 'GPA', sort: true },
    { dataField: 'drl', text: 'ĐRl', sort: true },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 1,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prevPageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
  });
  useEffect(() => {
    axios
      .get('http://localhost:3000/StudentIds')
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <BootstrapTable
        bootstrap4
        striped={true}
        keyField="username"
        columns={columns}
        data={userList}
        pagination={pagination}
      />
    </>
  );
};
export default Table;
