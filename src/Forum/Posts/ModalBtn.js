import React, { useState, useEffect } from 'react';
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

function ModalBtn({
  btnName,
  title,
  submitBtn,
  headingText,
  contentText,
  setHeadingText,
  setContentText,
  setPosts,
  posts,
  edit = false,
  post,
}) {
  const [open, setOpen] = React.useState(false);
  const [addErrorMessage, setAddErrorMessage] = useState(false);
  const [editErrorMessage, setEditErrorMessage] = useState(false);
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const name = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).name
    : '';
  const [textEdit, setTextEdit] = useState({
    headingText: '',
    contentText: '',
  });
  useEffect(() => {
    if (edit) {
      axios
        .get(`/posts/show/${post.id}`)
        .then((res) => {
          setTextEdit({
            headingText: res.data.title,
            contentText: res.data.content,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    if (!edit) {
      setHeadingText('');
      setContentText('');
      setAddErrorMessage(false);
    } else {
      axios
        .get(`/posts/show/${post.id}`)
        .then((res) => {
          setTextEdit({
            headingText: res.data.title,
            contentText: res.data.content,
          });
        })
        .catch((err) => console.log(err));
      setEditErrorMessage(false);
    }
  };
  const handleHeadingChange = (e) => {
    setAddErrorMessage(false);
    setHeadingText(e.target.value);
  };
  const handleContentChange = (e) => {
    setAddErrorMessage(false);
    setContentText(e.target.value);
  };
  const handleTextEditChange = (e) => {
    setEditErrorMessage(false);
    setTextEdit({ ...textEdit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (!edit) {
      if (headingText === '' || contentText === '') {
        setAddErrorMessage(true);
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
                id: res.data.postId,
                owner: name,
                ownerId: username,
                quantityComments: res.data.commentIds.length,
                title: headingText,
              },
            ]);
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .post(`/notifications/create/${username}?type=bài đăng`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        handleClose();
      }
    } else {
      if (textEdit.headingText === '' || textEdit.contentText === '') {
        setEditErrorMessage(true);
      } else {
        axios
          .post(`/posts/update/${post.id}`, {
            title: textEdit.headingText,
            content: textEdit.contentText,
          })
          .then((res) => {
            setPosts([
              ...posts.filter((p) => p.id !== post.id),
              {
                createdAt: post.createdAt,
                id: post.id,
                owner: name,
                ownerId: username,
                quantityComments: post.quantityComments,
                title: textEdit.headingText,
              },
            ]);
          })
          .catch((err) => console.log(err));
        setOpen(false);
      }
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

          {!edit ? (
            <>
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
            </>
          ) : (
            <>
              <TextField
                required
                id="filled-basic"
                label="Tiêu đề"
                variant="filled"
                defaultValue={textEdit.headingText}
                fullWidth
                sx={{ mb: 2.5 }}
                inputProps={{ maxLength: 80 }}
                name="headingText"
                onChange={handleTextEditChange}
              />

              <TextField
                required
                id="filled-basic"
                label="Nội dung"
                variant="filled"
                defaultValue={textEdit.contentText}
                rows={12}
                fullWidth
                multiline
                name="contentText"
                onChange={handleTextEditChange}
              />
            </>
          )}

          <div className="btn-forum">
            {edit && editErrorMessage && (
              <p style={{ margin: '0px 70px 0px 0px', color: 'red' }}>
                Vui lòng điền đầy đủ thông tin
              </p>
            )}
            {!edit && addErrorMessage && (
              <p style={{ margin: '0px 70px 0px 0px', color: 'red' }}>
                Vui lòng điền đầy đủ thông tin
              </p>
            )}
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
