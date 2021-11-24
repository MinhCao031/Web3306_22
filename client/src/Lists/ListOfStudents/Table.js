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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterButton from '../Filters/FilterButton';
import AddStudentButton from './AddStudentButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import SpecificFilterButton from '../Filters/SpecificFilterButton';

import FileInput from '../FileInput/FileInput';
import FileExport from '../FileExport/FileExport';
const Table = () => {
  const [userList, setUserList] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  const [editedRows, setEditedRows] = useState([]);
  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };
  const filterData = {
    delay: 100,
    style: {
      border: 'none',
      paddingLeft: 0,
      margin: 0,
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
      style: (cell, row, rowIndex, colIndex) => {
        if (row.level === 'Thành viên') {
          return {
            color: '#DF9941',
            border: '1px solid #DF9941',
            borderRadius: '15px',
          };
        } else if (row.level === 'Bí thư') {
          return {
            color: '#E4636F',
            border: '1px solid #E4636F',
            borderRadius: '15px',
          };
        } else if (row.level === 'Lớp trưởng') {
          return {
            color: '#7FC008',
            border: '1px solid #7FC008',
            borderRadius: '15px',
          };
        }
      },
    },
    {
      dataField: 'dateOfBirth',
      text: 'Ngày sinh',
      sort: true,
      filter: textFilter(filterData),
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
      validator: (newValue, row, column) => {
        if (!newValue) {
          return {
            valid: false,
            message: 'Nơi sinh không được để trống',
          };
        }
        return true;
      },
    },
    {
      dataField: 'gpa',
      text: 'GPA',
      sort: true,
      filter: textFilter(filterData),
      validator: (newValue, row, column) => {
        if (newValue.length <= 0) {
          return {
            valid: false,
            message: 'GPA không được để trống',
          };
        }
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
      text: 'ĐRL',
      sort: true,
      filter: textFilter(filterData),
      validator: (newValue, row, column) => {
        if (newValue.length <= 0) {
          return {
            valid: false,
            message: 'ĐRL không được để trống',
          };
        }
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
        value: userList.length,
      },
    ],
  });
  const selectRow = {
    mode: 'checkbox',
    selectionRenderer: ({ mode, ...rest }) => <input type={mode} {...rest} />,
    selectColumnPosition: 'right',
    style: { backgroundColor: '#c8e6c9' },
    headerColumnStyle: {
      textAlign: 'center',
    },
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        setDeletedRows([...deletedRows, row.username]);
      } else {
        setDeletedRows(deletedRows.filter((item) => item !== row.username));
      }
    },
    onSelectAll: (isSelect, rows, e) => {
      if (isSelect) {
        setDeletedRows(rows.map((item) => item.username));
      } else {
        setDeletedRows([]);
      }
    },
  };
  const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
    ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
    : '';
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const classNameTable = JSON.parse(sessionStorage.getItem('TableInfo'))
    ? JSON.parse(sessionStorage.getItem('TableInfo')).className
    : 'Loading...';
  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/classes/students`, null, {
        params: {
          class_id: classId,
          role: 'Teacher',
          user_id: username,
        },
      })
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSaveAction = (e) => {
    axios
      .post(`http://localhost:5000/api/classes/${classId}/update`, {
        removed: deletedRows,
        edited: editedRows,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
    console.log(getUniqueListBy(editedRows, 'username'));
    e.preventDefault();
  };
  const handleDeleteAction = (e) => {
    setUserList(
      userList.filter((item) => !deletedRows.includes(item.username))
    );
    e.preventDefault();
  };
  const handleCancelAction = (e) => {
    axios
      .post(`http://localhost:5000/api/classes/students`, null, {
        params: {
          class_id: classId,
          role: 'Teacher',
          user_id: username,
        },
      })
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <>
      <Stack spacing={1} direction="row">
        <SpecificFilterButton data={userList} setData={setUserList} />
        <AddStudentButton data={userList} setData={setUserList} />
        <Fab aria-label="delete" size="medium" onClick={handleDeleteAction}>
          <DeleteOutlineIcon />
        </Fab>
      </Stack>
      <ClassName>{classNameTable}</ClassName>
      <div className="filter">
        <FilterButton type="good" data={userList} setData={setUserList} />
        <FilterButton type="bad" data={userList} setData={setUserList} />
      </div>
      <BootstrapTable
        bootstrap4
        hover={true}
        keyField="username"
        columns={columns}
        data={userList}
        pagination={pagination}
        filter={filterFactory()}
        noDataIndication="Không có sinh viên"
        selectRow={selectRow}
        bordered={false}
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
          autoSelectText: true,
          afterSaveCell: (oldValue, newValue, row, column) => {
            if (oldValue != newValue) {
              setEditedRows([...editedRows, row]);
            }
          },
        })}
      />
      <div className="ioFile">
        <div className="FileIn">
          <FileInput setData={setUserList} />
        </div>
        <div className="FileOut">
          <FileExport data={userList} />
        </div>
      </div>
      <div className="saveButton">
        <Stack spacing={3} direction="row">
          <Button
            variant="contained"
            onClick={handleSaveAction}
            color="success"
            startIcon={<SaveIcon />}
          >
            Lưu
          </Button>
          <Button
            variant="contained"
            onClick={handleCancelAction}
            color="error"
            startIcon={<ClearIcon />}
          >
            Hủy
          </Button>
        </Stack>
      </div>
    </>
  );
};
export default Table;
