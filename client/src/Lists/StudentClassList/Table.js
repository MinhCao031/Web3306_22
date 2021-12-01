import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ClassName from './ClassName';
const Table = () => {
  const [data, setData] = useState([]);
  const [className, setClassName] = useState('');
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const columns = [
    {
      dataField: 'name',
      text: 'Họ và tên',
    },
    {
      dataField: 'username',
      text: 'MSSV',
    },
    {
      dataField: 'level',
      text: 'Chức vụ',
      style: (cell, row, rowIndex, colIndex) => {
        if (row.level === 'Thành viên') {
          return {
            color: '#DF9941',
          };
        } else if (row.level === 'Bí thư') {
          return {
            color: '#E4636F',
          };
        } else if (row.level === 'Lớp trưởng') {
          return {
            color: '#7FC008',
          };
        }
      },
    },
    {
      dataField: 'dateOfBirth',
      text: 'Ngày sinh',
      formatter: (cell) => {
        let date = cell;
        if (typeof cell !== 'object') {
          date = new Date(cell);
        }
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1;
        let year = date.getFullYear();

        month = (month > 9 ? '' : '0') + month;
        day = (day > 9 ? '' : '0') + day;

        return `${year}-${month}-${day}`;
      },
    },
    {
      dataField: 'gender',
      text: 'Giới tính',
    },
    {
      dataField: 'hometown',
      text: 'Nơi sinh',
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prevPageText: '<',
    alwaysShowAllBtns: true,
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
      {
        text: '10',
        value: 10,
      },
      {
        text: '20',
        value: 20,
      },
      {
        text: '30',
        value: 30,
      },
      {
        text: 'All',
        value: data.length,
      },
    ],
  });
  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/classes/students`, null, {
        params: {
          role: 'Student',
          user_id: username,
        },
      })
      .then((res) => {
        setData(res.data.filter((item) => !item.className));
        setClassName(res.data[res.data.length - 1].className);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ClassName>{className}</ClassName>
      <BootstrapTable
        bootstrap4
        hover={true}
        keyField="username"
        columns={columns}
        data={data}
        pagination={pagination}
        noDataIndication="Không có sinh viên"
        bordered={true}
      />
    </>
  );
};

export default Table;
