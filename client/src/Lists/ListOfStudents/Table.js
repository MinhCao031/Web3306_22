import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import './ListOfStudents.css';
const Table = () => {
  const [userList, setUserList] = useState([]);
  const columns = [
    {
      dataField: 'name',
      text: 'Họ và tên',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập họ và tên',
      }),
    },
    {
      dataField: 'username',
      text: 'MSSV',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập MSSV',
      }),
    },
    {
      dataField: 'level',
      text: 'Chức vụ',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập chức vụ',
      }),
    },
    {
      dataField: 'dateOfBirth',
      text: 'Ngày sinh',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập ngày sinh',
      }),
    },
    {
      dataField: 'gender',
      text: 'Giới tính',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập giới tính',
      }),
    },
    {
      dataField: 'hometown',
      text: 'Nơi sinh',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập nơi sinh',
      }),
    },
    {
      dataField: 'gpa',
      text: 'GPA',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập GPA',
      }),
    },
    {
      dataField: 'drl',
      text: 'ĐRl',
      sort: true,
      filter: textFilter({
        placeholder: 'Nhập ĐRL',
      }),
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
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
        filter={filterFactory()}
      />
    </>
  );
};
export default Table;
