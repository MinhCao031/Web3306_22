import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import './Modal.css';
import axios from 'axios';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 600,
  bgcolor: '#F4F5FA',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function postBtn({ btnName, handleClickOpen }) {
  return (
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
      {btnName}
    </Button>
  );
}

function editBtn({ handleClickOpen }) {
  return (
    <IconButton color="default" aria-label="edit" onClick={handleClickOpen}>
      <EditIcon />
    </IconButton>
  );
}

//codeTT
function deleteBtn({ handleClickOpen }) {
  return (
    <IconButton color="default" aria-label="delete" onClick={handleClickOpen}>
      <DeleteIcon />
    </IconButton>
  );
}

function ModalBtn({
  btnName,
  title,
  submitBtn,
  headingText = '',
  contentText = '',
  setHeadingText,
  setContentText,
  setPosts,
  posts = [],
  edit = false,
}) {
  const [open, setOpen] = React.useState(false);
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const name = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).name
    : '';
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHeadingText('');
    setContentText('');
  };
  const handleHeadingChange = (e) => {
    setHeadingText(e.target.value);
  };
  const handleContentChange = (e) => {
    setContentText(e.target.value);
  };
  const handleSubmit = (e) => {
    if (headingText === '' || contentText === '') {
      alert('Please fill all the fields');
    } else {
      axios
        .post(`http://localhost:5000/api/posts/create/${username}`, {
          title: headingText,
          content: contentText,
        })
        .then((res) => {
          setPosts([
            ...posts,
            {
              createdAt: res.data.createdAt,
              id: res.data._id,
              owner: name,
              quantityComments: res.data.commentIds.length,
              title: headingText,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
      handleClose();
      setHeadingText('');
      setContentText('');
    }
    e.preventDefault();
  };
  return (
    <div>
      {edit
        ? editBtn({ handleClickOpen: handleClickOpen })
        : postBtn({ btnName: btnName, handleClickOpen })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          {/* Move typography to center of Box */}
          <Typography
            variant="h4"
            id="modal-modal-title"
            align="center"
            sx={{ mb: 2.5 }}
          >
            {title}
          </Typography>

          <TextField
            required
            id="filled-basic"
            label="Tiêu đề"
            variant="filled"
            defaultValue={headingText}
            fullWidth
            sx={{ mb: 2.5 }}
            inputProps={{ maxLength: 80 }}
            onChange={handleHeadingChange}
          />

          <TextField
            required
            id="filled-basic"
            label="Nội dung"
            variant="filled"
            defaultValue={contentText}
            rows={12}
            fullWidth
            multiline
            onChange={handleContentChange}
          />
          <div className="btn-forum">
            <Button variant="contained" color="error" onClick={handleClose}>
              Hủy
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 4 }}
              onClick={handleSubmit}
            >
              {submitBtn}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalBtn;
