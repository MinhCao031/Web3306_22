import "./messenger.css"
import Conversation from "../components/conversations/conversation"
import Message from "../components/message/Message"
import ChatOnline from "../components/chatOnline/ChatOnline"
import { useContext } from "react"
//import { AuthContext } from "../context/AuthContext"
import NavigationBar from '../HomePage/components/NavigationBar';
import Sidebar from '../HomePage/components/Sidebar';

export default function Messenger() {

   // const {user} = useContext(AuthContext);

    //console.log(user);
    return(

      
      <>
      <NavigationBar />
      <div className="messenger">
      <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for Student" className="chatMenuInput" />
        <Conversation />
        </div>  
      </div>  
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own = {true}/>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="write something.."></textarea>
              <button className="chatSubmitButton">Sent</button>
          </div>
          </div>
      </div> 
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline /> 
        </div>
      </div> 
      </div>
      <Sidebar />
      </>
     
    

    )
}