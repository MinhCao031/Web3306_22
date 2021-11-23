//import axios from "axios";
//import { useEffect, useState } from "react";
import "./chatOnline.css";
import boy from '../../assets/boy_ava.png';

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {

  return (
    <div className="chatOnline">

        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={boy}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">19020067</span>
        </div>
    </div>
  );
}
