import "./boxPost.css";
import { format } from "timeago.js";
import pen from '../../assets/pen.png';
import boy from '../../assets/bin.png';

export default function BoxPost() {

    return (
        <div className = "boxPost">
            <div className = "postsitive">
            <span className ="view-number">2</span>
            <div className = "postsitive-name"> 
                <span className = "name-text">Cao Dinh Hoang Minh </span>  
                <span className="time">{format("1h ago")}</span>
            </div>
            <div className = "heading-text"> Hoi thoi gian phat nguoi yeu </div>
            <img   className="penImg" src={pen} alt="" />
            <img   className="binImg" src={boy} alt="" />
            </div>
        </div>
      );
}
