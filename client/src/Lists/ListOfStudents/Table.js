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
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import './ListOfStudents.css';
import ClassName from './ClassName';
import { MdFormatStrikethrough } from 'react-icons/md';
const Table = () => {
  const [userList, setUserList] = useState([]);
  const filterData = {
    delay: 100,
    style: {
      border: 'none',
      paddingLeft: 0,
    },
    placeholder: 'Tìm kiếm',
  };
  const columns = [
    {
      dataField: 'name',
      text: 'Họ và tên',
      sort: true,
      filter: textFilter(filterData),
      editable: false,
    },
    {
      dataField: 'username',
      text: 'MSSV',
      sort: true,
      filter: textFilter(filterData),
    },
    {
      dataField: 'level',
      text: 'Chức vụ',
      sort: true,
      filter: textFilter(filterData),
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'Thành viên',
            label: 'Thành viên',
          },
          {
            value: 'Bí thư',
            label: 'Bí thư',
          },
          {
            value: 'Lớp trưởng',
            label: 'Lớp trưởng',
          },
        ],
      },
    },
    {
      dataField: 'dateOfBirth',
      text: 'Ngày sinh',
      sort: true,
      filter: textFilter(filterData),
      // editable: false,
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${('0' + dateObj.getUTCDate()).slice(-2)}/${(
          '0' +
          (dateObj.getUTCMonth() + 1)
        ).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
      editor: {
        type: Type.DATE,
      },
    },
    {
      dataField: 'gender',
      text: 'Giới tính',
      sort: true,
      filter: textFilter(filterData),
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: 'Nam',
            label: 'Nam',
          },
          {
            value: 'Nữ',
            label: 'Nữ',
          },
        ],
      },
    },
    {
      dataField: 'hometown',
      text: 'Nơi sinh',
      sort: true,
      filter: textFilter(filterData),
    },
    {
      dataField: 'gpa',
      text: 'GPA',
      sort: true,
      filter: textFilter(filterData),
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: 'Vui lòng điền giá trị giữa 0 và 4',
          };
        }
        if (newValue < 0 || newValue > 4) {
          return {
            valid: false,
            message: 'Vui lòng điền giá trị giữa 0 và 4',
          };
        }
        return true;
      },
    },
    {
      dataField: 'drl',
      text: 'ĐRl',
      sort: true,
      filter: textFilter(filterData),
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: 'Vui lòng điền giá trị giữa 0 và 100',
          };
        }
        if (newValue < 0 || newValue > 100) {
          return {
            valid: false,
            message: 'Vui lòng điền giá trị giữa 0 và 100',
          };
        }
        return true;
      },
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 1,
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
        value: userList.length,
      },
    ],
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
        hover={true}
        keyField="username"
        columns={columns}
        data={userList}
        pagination={pagination}
        filter={filterFactory()}
        noDataIndication="Không có sinh viên"
        caption={<ClassName />}
        bordered={false}
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
          autoSelectText: true,
        })}
      />
    </>
  );
};
export default Table;
