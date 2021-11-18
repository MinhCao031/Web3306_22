import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
export default function SpecificFilterButton({ data, setData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [filterData, setFilterData] = React.useState({
    gpaStart: 0,
    gpaEnd: 4,
    drlStart: 0,
    drlEnd: 100,
  });
  const [error, setError] = React.useState({
    gpaStart: false,
    gpaEnd: false,
    drlStart: false,
    drlEnd: false,
  });
  const handleChange = (event) => {
    setFilterData({
      ...filterData,
      [event.target.name]: event.target.value,
    });
    if (isNaN(event.target.value)) {
      setError({
        ...error,
        [event.target.name]: true,
      });
    } else {
      setError({
        ...error,
        [event.target.name]: false,
      });
    }
  };
  const handleCancel = () => {
    setOpen(false);
    setError({
      gpaStart: false,
      gpaEnd: false,
      drlStart: false,
      drlEnd: false,
    });
    setFilterData({
      gpaStart: 0,
      gpaEnd: 4,
      drlStart: 0,
      drlEnd: 100,
    });
  };
  const handleFilter = () => {
    if (!error.gpaStart && !error.gpaEnd && !error.drlStart && !error.drlEnd) {
      const gpaStart =
        filterData.gpaStart !== '' ? parseFloat(filterData.gpaStart) : 0;
      const gpaEnd =
        filterData.gpaEnd !== '' ? parseFloat(filterData.gpaEnd) : 4;
      const drlStart =
        filterData.drlStart !== '' ? parseInt(filterData.drlStart) : 0;
      const drlEnd =
        filterData.drlEnd !== '' ? parseInt(filterData.drlEnd) : 100;
      setData(
        data.filter((student) => {
          if (
            student.gpa >= gpaStart &&
            student.gpa <= gpaEnd &&
            student.drl >= drlStart &&
            student.drl <= drlEnd
          ) {
            return student;
          }
        })
      );
      setFilterData({
        gpaStart: 0,
        gpaEnd: 4,
        drlStart: 0,
        drlEnd: 100,
      });
      setOpen(false);
    }
  };
  console.log(filterData);
  return (
    <div>
      <Fab
        color="secondary"
        aria-label="delete"
        size="medium"
        onClick={handleClickOpen}
      >
        <SavedSearchIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontWeight: 'bold' }}>
          Lọc theo tiêu chí
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Nhập tiêu chí cần lọc</DialogContentText>
          <br />
          <Stack direction="row" spacing={2}>
            <TextField
              name="gpaStart"
              label="GPA start"
              variant="filled"
              size="small"
              value={filterData.gpaStart}
              onChange={handleChange}
              error={error.gpaStart}
              helperText={error.gpaStart ? 'Giá trị không hợp lệ' : ''}
            />
            <Box sx={{ mx: 2, display: 'flex', alignItems: 'center' }}>to</Box>
            <TextField
              name="gpaEnd"
              label="GPA end"
              variant="filled"
              size="small"
              value={filterData.gpaEnd}
              onChange={handleChange}
              error={error.gpaEnd}
              helperText={error.gpaEnd ? 'Giá trị không hợp lệ' : ''}
            />
          </Stack>
          <br />
          <Stack direction="row" spacing={2}>
            <TextField
              name="drlStart"
              label="ĐRL start"
              variant="filled"
              size="small"
              value={filterData.drlStart}
              onChange={handleChange}
              error={error.drlStart}
              helperText={error.drlStart ? 'Giá trị không hợp lệ' : ''}
            />
            <Box sx={{ mx: 2, display: 'flex', alignItems: 'center' }}>to</Box>
            <TextField
              name="drlEnd"
              label="ĐRL end"
              variant="filled"
              size="small"
              value={filterData.drlEnd}
              onChange={handleChange}
              error={error.drlEnd}
              helperText={error.drlEnd ? 'Giá trị không hợp lệ' : ''}
            />
          </Stack>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleFilter}>Lọc</Button>
          <Button onClick={handleCancel}>Hủy</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
