import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { useHistory } from 'react-router-dom';
const userId = '10012019';
const Table = () => {
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
      .get('http://localhost:3002/class')
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
        console.log(row);
        if (row.classType === 'Thường') {
          return {
            color: '#DF9941',
            border: '1px solid #DF9941',
            borderRadius: '15px',
          };
        } else if (row.classType === 'CLC') {
          return {
            color: '#E4636F',
            border: '1px solid #E4636F',
            borderRadius: '15px',
          };
        } else if (row.classType === 'CLCTT23') {
          return {
            color: '#7FC008',
            border: '1px solid #7FC008',
            borderRadius: '15px',
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
        bordered={false}
        filter={filterFactory()}
        noDataIndication="Không có lớp"
        rowEvents={rowEvents}
      />
    </>
  );
};

export default Table;
