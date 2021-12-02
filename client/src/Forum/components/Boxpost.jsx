import "./boxPost.css";
import { format } from "timeago.js";
import ModalBtn from '../Posts/ModalBtn';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import React from 'react';
import Comment from "../Posts/Comment";
import Posts from "../Posts/Posts";
//codeTT
function deleteBtn({handleClickOpen}) {
    return (
        <IconButton
            color="default" 
            aria-label="delete" 
            onClick={handleClickOpen}
        >
            <DeleteIcon />
        </IconButton>
    )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 800,
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const handleClick = (event) => {
    console.log("delete");
}   

export default function BoxPost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //type = "button" onClick = {handleOpen}
    return (
        <div >
            <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Comment />
                </Box>
            </Modal>
            </div>

        <div 
            className = "boxPost"
            >
            <div 
                className = "feildClick"
                type  type = "button" onClick = {handleOpen}
                > 
            <span className ="view-number">20</span>
            <div className = "postsitive-name"> 
                <span className = "name-text">Cao Dinh Hoang Minh </span> . 
                <span className="time">{format("1h ago")}</span>
            </div>
            <div >
                <div className = "heading-text"> Hoi thoi gian phat nguoi yeu </div>
            </div>
            </div>
            <div className = "penButton">            
                <ModalBtn 
                btnName=""
                title="SỬA BÀI ĐĂNG"
                submitBtn="Cập nhật"
                headingText="Hỏi thông tin học bổng 100 củ"
                contentText="Em được biết là trường đang phát tiền miễn phí, cho em hỏi thêm thông tin với ạ"
                edit='true'
                />
            </div>
            <div type = "button" onclick = {handleClick} >
            <div className = "binButton"> <DeleteIcon /> </div>
            </div>
        </div>
        </div>
      );
}
