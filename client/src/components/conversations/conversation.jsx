import "./conversation.css";
import boy from '../../assets/boy_ava.png';

export default function Conversation() {    
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        
        src={boy}
        //src="../../../public/assets/ad.png"
        alt=""
      />
      <span className="conversationName">19020067</span>
    </div>
  );
}