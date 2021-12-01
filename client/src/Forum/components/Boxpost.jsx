import "./boxPost.css";
import { format } from "timeago.js";
import boy from '../../assets/bin.png';
import ModalBtn from '../Posts/ModalBtn';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


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

const handleClick = (event) => {
    console.log("delete");
}   

export default function BoxPost() {

    return (
        <div className = "boxPost">
            <span className ="view-number">20</span>
            <div className = "postsitive-name"> 
                <span className = "name-text">Cao Dinh Hoang Minh </span> . 
                <span className="time">{format("1h ago")}</span>
            </div>
            <div type = "button" onclick = {handleClick}>
                <div className = "heading-text"> Hoi thoi gian phat nguoi yeu </div>
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
      );
}
