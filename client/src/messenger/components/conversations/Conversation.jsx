import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import boy from '../../../assets/boy_ava.png';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.username);
   // console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios.get(`/users/${friendId}/show` );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={boy}
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
