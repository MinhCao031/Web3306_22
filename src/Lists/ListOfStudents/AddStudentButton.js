import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
export default function AddStudentButton({ data, setData }) {
    const classId = JSON.parse(sessionStorage.getItem('TableInfo'))
        ? JSON.parse(sessionStorage.getItem('TableInfo')).classId
        : '';
    const [ open, setOpen ] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const levels = [
        {
            value: 'Thành viên',
            label: 'Thành viên'
        },
        {
            value: 'Lớp trưởng',
            label: 'Lớp trưởng'
        },
        {
            value: 'Bí thư',
            label: 'Bí thư'
        }
    ];
    const genders = [
        {
            value: 'Nam',
            label: 'Nam'
        },
        {
            value: 'Nữ',
            label: 'Nữ'
        }
    ];
    // const [level, setLevel] = React.useState('Thành viên');
    // const [gender, setGender] = React.useState('Nam');
    // const [hometownError, setHometownError] = React.useState(false);
    // const [hometown, setHometown] = React.useState('Hà Nội');

    const [ name, setName ] = React.useState('Nguyễn Văn A');
    const [ username, setUsername ] = React.useState('10000000');
    const [ dateOfBirth, setDateOfBirth ] = React.useState('2001-02-12');
    const [ phoneNumber, setPhoneNumber ] = React.useState('0000000000');
    const [ parentPhoneNumber, setParentPhoneNumber ] = React.useState('0000000000');
    const [ gpa, setGpa ] = React.useState(0);
    const [ drl, setDrl ] = React.useState(0);
    const [ nameError, setNameError ] = React.useState(false);
    const [ usernameError, setUsernameError ] = React.useState(false);
    const [ usernameIsExist, setUsernameIsExist ] = React.useState(false);
    const [ phoneNumberError, setPhoneNumberError ] = React.useState(false);
    const [ parentPhoneNumberError, setParentPhoneNumberError ] = React.useState(false);
    const [ gpaError, setGpaError ] = React.useState(false);
    const [ drlError, setDrlError ] = React.useState(false);
    const handleCancel = () => {
        // setHometownError(false);
        // setLevel('Thành viên');
        // setGender('Nam');
        // setHometown('Hà Nội');

        setOpen(false);
        setNameError(false);
        setUsernameError(false);
        setPhoneNumberError(false);
        setParentPhoneNumberError(false);
        setGpaError(false);
        setDrlError(false);
        setUsernameIsExist(false);
        setUsername('10000000');
        setName('Nguyễn Văn A');
        setDateOfBirth('2001-02-12');
        setGpa(0);
        setDrl(0);
    };
    const handleAdd = () => {
        if (data.some((student) => student.username == username)) {
            setUsernameIsExist(true);
            return;
        }
        if (
            // !hometownError &&
            !nameError &&
            !usernameError &&
            !phoneNumberError &&
            !parentPhoneNumberError &&
            !gpaError &&
            !drlError &&
            !usernameIsExist
        ) {
            setOpen(false);
            setData([
                ...data,
                {
                    // level,
                    // hometown,
                    // gender,

                    username: parseInt(username),
                    name,
                    dateOfBirth,
                    email: `${username}@vnu.edu.vn`,
                    phoneNumber,
                    parentPhoneNumber,
                    gpa: parseFloat(gpa),
                    drl: parseInt(drl)
                }
            ]);
            axios
                .post(`/api/classes/${classId}/add-student`, {
                    // level,
                    // gender,
                    // hometown,

                    username: parseInt(username),
                    name,
                    dateOfBirth,
                    email: `${username}@vnu.edu.vn`,
                    phoneNumber,
                    parentPhoneNumber,
                    gpa: parseFloat(gpa),
                    drl: parseInt(drl)
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            // setLevel('Thành viên');
            // setGender('Nam');
            // setHometown('Hà Nội');

            setUsername('10000000');
            setName('Nguyễn Văn A');
            setDateOfBirth('2001-02-12');
            setPhoneNumber('0000000000');
            setParentPhoneNumber('0000000000');
            setGpa(0);
            setDrl(0);
        }
    };
    // const handleLevelChange = (e) => {
    //   setLevel(e.target.value);
    // };
    // const handleGenderChange = (e) => {
    //   setGender(e.target.value);
    // };
    // const handleHometownChange = (e) => {
    //   if (e.target.value === '') {
    //     setHometownError(true);
    //   } else {
    //     setHometownError(false);
    //   }
    //   setHometown(e.target.value);
    // };

    const handleNameChange = (e) => {
        if (e.target.value === '') {
            setNameError(true);
        } else if (/\d/.test(e.target.value)) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        setName(e.target.value);
    };
    const handleUsernameChange = (e) => {
        if (isNaN(e.target.value)) {
            setUsernameError(true);
        } else if (e.target.value === '') {
            setUsernameError(true);
        } else if (e.target.value.length !== 8) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        setUsernameIsExist(false);
        setUsername(e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        let newValue = e.target.value;
        if (/[a-zA-Z]/g.test(newValue) || newValue.length != 10) {
            setPhoneNumberError(true);
        } else {
            setPhoneNumberError(false);
        }
        setPhoneNumber(newValue);
    };
    const handleParentPhoneNumberChange = (e) => {
        let newValue = e.target.value;
        if (/[a-zA-Z]/g.test(newValue) || newValue.length != 10) {
            setParentPhoneNumberError(true);
        } else {
            setParentPhoneNumberError(false);
        }
        setParentPhoneNumber(newValue);
    };

    const handleGpaChange = (e) => {
        if (e.target.value === '') {
            setGpaError(true);
        } else if (isNaN(e.target.value)) {
            setGpaError(true);
        } else if (e.target.value < 0 || e.target.value > 4) {
            setGpaError(true);
        } else {
            setGpaError(false);
        }
        setGpa(e.target.value);
    };
    const handleDrlChange = (e) => {
        if (e.target.value === '') {
            setDrlError(true);
        } else if (isNaN(e.target.value)) {
            setDrlError(true);
        } else if (e.target.value < 0 || e.target.value > 100) {
            setDrlError(true);
        } else {
            setDrlError(false);
        }
        setDrl(e.target.value);
    };
    return (
        <div>
            <Fab color="primary" aria-label="add" size="medium" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ fontWeight: 'bold' }}>Thêm sinh viên</DialogTitle>
                <DialogContent>
                    <DialogContentText>Nhập thông tin sinh viên</DialogContentText>
                    <Stack direction="row" spacing={3}>
                        <TextField
                            fullWidth
                            required
                            label="Họ và tên"
                            variant="standard"
                            value={name}
                            onChange={handleNameChange}
                            error={nameError}
                            helperText={nameError ? 'Không hợp lệ' : ''}
                        />
                        <TextField
                            fullWidth
                            required
                            label="MSSV"
                            variant="standard"
                            value={username}
                            onChange={handleUsernameChange}
                            error={usernameError}
                            helperText={usernameError ? 'Không hợp lệ' : ''}
                        />
                    </Stack>
                    <br />
                    <Stack direction="row" spacing={3}>
                        {/* <TextField
              fullWidth
              variant="standard"
              select
              label="Chức vụ"
              value={level}
              onChange={handleLevelChange}
            >
              {levels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
                        <TextField
                            type="date"
                            fullWidth
                            label="Ngày sinh"
                            variant="standard"
                            value={dateOfBirth}
                            onChange={handleDateOfBirthChange}
                        />
                        <TextField
                            fullWidth
                            required
                            label="Số điện thoại"
                            variant="standard"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            error={phoneNumberError}
                            helperText={phoneNumberError ? 'Không hợp lệ' : ''}
                        />
                    </Stack>
                    <br />
                    <Stack direction="row" spacing={3}>
                        <TextField
                            fullWidth
                            required
                            label="Số điện thoại phụ huynh"
                            variant="standard"
                            value={parentPhoneNumber}
                            onChange={handleParentPhoneNumberChange}
                            error={parentPhoneNumberError}
                            helperText={parentPhoneNumberError ? 'Không hợp lệ' : ''}
                        />
                        {/* <TextField
              fullWidth
              variant="standard"
              select
              label="Giới tính"
              value={gender}
              onChange={handleGenderChange}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Nơi sinh"
              variant="standard"
              value={hometown}
              onChange={handleHometownChange}
              error={hometownError}
              helperText={hometownError ? 'Không hợp lệ' : ''}
            /> */}
                        <TextField
                            fullWidth
                            label="GPA"
                            variant="standard"
                            value={gpa}
                            onChange={handleGpaChange}
                            error={gpaError}
                            helperText={gpaError ? 'Không hợp lệ' : ''}
                        />
                    </Stack>
                    <br />
                    <Stack direction="row" spacing={3}>
                        <TextField
                            //fullWidth
                            label="ĐRL"
                            variant="standard"
                            value={drl}
                            onChange={handleDrlChange}
                            error={drlError}
                            helperText={drlError ? 'Không hợp lệ' : ''}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {usernameIsExist && <p style={{ margin: '0', color: 'red' }}>MSSV đã tồn tại !</p>}
                    <div>
                        <Button onClick={handleAdd}>Thêm</Button>
                        <Button onClick={handleCancel}>Hủy</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
