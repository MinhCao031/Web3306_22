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
import React, {useEffect, useState} from 'react';
import Comment from "../Posts/Comment";
import axios from 'axios';
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

export default function BoxPost({post, posts, setPosts}) {
  const [open, setOpen] = React.useState(false);
  const [headingText, setHeadingText] = useState('');
  const [contentText, setContentText] = useState('');
  const [commentData, setCommentData] = useState({});
   const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
    const handleOpen = () => {
        setOpen(true)
        axios.get(`/posts/show/${post.id}`)
        .then(res => {
            console.log(commentData);
            setCommentData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    };
    const handleClose = () => setOpen(false);
    const handleDelete = () => {
        axios.delete(`/posts/delete/${post.id}`)
        .then((res) => {
            if(posts.length > 0){
                setPosts(posts.filter(p => p.id !== post.id));
            }
        })
        .catch(err => console.log(err));
    }
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
                    <Comment commentData={commentData}/>
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
            <span className ="view-number">{post.quantityComments}</span>
            <div className = "postsitive-name"> 
                <span className = "name-text">{post.owner}</span>
                <span className="time">{post.createdAt}</span>
            </div>
            <div >
                <div className = "heading-text">{post.title}</div>
            </div>
            </div>
            {username == post.ownerId &&
                <>
            <div className = "penButton">            
                <ModalBtn 
                btnName=""
                title="SỬA BÀI ĐĂNG"
                submitBtn="Cập nhật"
                headingText={headingText}
                contentText={contentText}
                setHeadingText={setHeadingText}
                setContentText={setContentText}
                edit='true'
                post ={post}
                posts={posts}
                setPosts={setPosts}
                />
            </div>
            <div type = "button" onclick = {handleClick} >
            <div className = "binButton"> <DeleteIcon 
                onClick={handleDelete}
            /> 
            </div>
            </div></>
            }   
        </div>
        </div>
      );
}
