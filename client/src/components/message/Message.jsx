import "./message.css";
import boy from '../../assets/boy_ava.png';

export default function Message({own}) {
  return (
    <div className= {own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={boy}
          alt=""
        />
        <p className="messageText">
          first @@wwwwww
          sdsdfse
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
