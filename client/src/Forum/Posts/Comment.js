import React, { PureComponent, useState } from 'react'
import data from "./data.json"
import { CommentSection } from './editSrc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-comments-section/dist/index.css'
// import "./Comment.css"

const Comment = () => {
    const [comment, setComment] = useState(data)

    const userId = "01a"
    const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
    const name = "xyz"

    const signinUrl = "/"
    const signupUrl = "/"
    let count = 0
    comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

    return (
      <>  
        <div className="Author">
            <p>Nguyễn Minh Thái</p>
            <p>13 giờ trước</p>
            <hr/>
            <p>
                Kính gửi thầy,
                Em tên là Nguyễn Minh Thái, MSSV 19021420
                Hôm qua em có biết được do quá ao chình các bạn còn lại trong quá trình học tập, làm hồ sơ và phỏng vấn nên em đã trúng tuyển suất học bổng trị giá $50000 ở Đại học Havard, cộng thêm khoản tiền hỗ trợ $10000 từ Chính phủ. Ban đầu em chỉ định nộp chơi chơi vì nghĩ Havard chưa đủ tầm với mình nên cũng không tìm hiểu kỹ, nay em mới biết thêm là giờ du học là vua của mọi nghề, vừa có tiền, vừa có quyền, vừa được xã hội trọng vọng, phụ nữ nghe xong thì lênh láng nước, đủ tạo thành mùa lũ để đi từ thiện nên em cũng đổi ý định. Vậy thầy có thể cho em hỏi thêm về thông tin về suất học bổng đó được không ạ? Em cảm ơn thầy nhiều ạ.
            </p>
            <hr/>
        </div>
        <div className="commentSection2">
            <div className="header">{count} Comments</div>
            <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} 
                commentsArray={comment}
                setComment={setComment} 
                signinUrl={signinUrl} 
                signupUrl={signupUrl}
            />
        </div>
      </>  
    )
}

export default Comment;