import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { useHistory } from 'react-router-dom';
const Table = () => {
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const history = useHistory();
  const [data, setData] = useState([]);
  const filterData = {
    delay: 100,
    style: {
      border: 'none',
      paddingLeft: 0,
      margin: 0,
    },
    placeholder: 'Tìm kiếm',
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/classes/${username}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const columns = [
    {
      dataField: 'classId',
      text: 'ID',
      hidden: true,
      filter: textFilter(filterData),
    },
    {
      dataField: 'className',
      text: 'Tên lớp',
      filter: textFilter(filterData),
    },
    {
      dataField: 'classType',
      text: 'Lớp',
      filter: textFilter(filterData),
      style: (cell, row, rowIndex, colIndex) => {
        if (row.classType === 'Thường') {
          return {
            color: '#DF9941',
          };
        } else if (row.classType === 'CLC') {
          return {
            color: '#E4636F',
          };
        } else if (row.classType === 'CLCTT23') {
          return {
            color: '#7FC008',
          };
        }
      },
    },
    {
      dataField: 'quantity',
      text: 'Sĩ số',
      filter: textFilter(filterData),
    },
    {
      dataField: 'leader',
      text: 'Cán bộ lớp',
      filter: textFilter(filterData),
    },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      sessionStorage.setItem(
        'TableInfo',
        JSON.stringify({
          classId: row.classId,
          className: row.className,
        })
      );
      history.push('/teacherHomepage/classList/studentList');
    },
  };
  return (
    <>
      <h1 className="class-name" style={{ marginBottom: '60px' }}>
        Danh sách lớp
      </h1>
      <BootstrapTable
        bootstrap4
        keyField="classId"
        data={data}
        columns={columns}
        hover
        bordered={true}
        filter={filterFactory()}
        noDataIndication="Không có lớp"
        rowEvents={rowEvents}
      />
    </>
  );
};

export default Table;
