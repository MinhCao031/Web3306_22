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
  console.log(userList);
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
      // editor: {
      //   type: Type.DATE,
      // },
      editable: false,
    },
    // {
    //   dataField: 'gender',
    //   text: 'Giới tính',
    //   sort: true,
    //   filter: textFilter(filterData),
    //   editor: {
    //     type: Type.SELECT,
    //     options: [
    //       {
    //         value: 'Nam',
    //         label: 'Nam',
    //       },
    //       {
    //         value: 'Nữ',
    //         label: 'Nữ',
    //       },
    //     ],
    //   },
    // },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
      filter: textFilter(filterData),
      editable: false,
    },
    {
      dataField: 'phoneNumber',
      text: 'Số điện thoại',
      sort: true,
      filter: textFilter(filterData),
      editable: false,
      validator: (newValue, row, column) => {
        if (/[a-zA-Z]/g.test(newValue) || newValue.length != 10) {
          return {
            valid: false,
            message: 'Số điện thoại không hợp lệ',
          };
        }
        return true;
      },
    },
    {
      dataField: 'parentPhoneNumber',
      text: 'Số điện thoại PH',
      sort: true,
      filter: textFilter(filterData),
      editable: false,
      validator: (newValue, row, column) => {
        if (/[a-zA-Z]/g.test(newValue) || newValue.length != 10) {
          return {
            valid: false,
            message: 'Số điện thoại không hợp lệ',
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
      .post(`/api/classes/students`, null, {
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
    const req = {
      removed: deletedRows,
      edited: getUniqueListBy(editedRows, 'username'),
    };
    axios
      .post(`/api/classes/${classId}/update`, req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
      .post(`/api/classes/students`, null, {
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
        <SpecificFilterButton setData={setUserList} />
        <AddStudentButton data={userList} setData={setUserList} />
        <Fab aria-label="delete" size="medium" onClick={handleDeleteAction}>
          <DeleteOutlineIcon />
        </Fab>
      </Stack>
      <ClassName>{classNameTable}</ClassName>
      <div className="filter">
        <FilterButton setData={setUserList} />
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
        bordered={true}
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
            onClick={handleCancelAction}
            color="error"
            startIcon={<ClearIcon />}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveAction}
            color="success"
            startIcon={<SaveIcon />}
          >
            Lưu
          </Button>
        </Stack>
      </div>
    </>
  );
};
export default Table;
