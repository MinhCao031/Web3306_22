import React, { PureComponent, useState } from 'react';
import './Comment.css';
import axios from 'axios';
import CommentList from './CommentList';
function changeDateFormat(responseDate) {
    var date = new Date(responseDate);
    var min = date.getMinutes();
    var hour = date.getHours();
    var second = date.getSeconds();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getFullYear();

    month = (month > 9 ? '' : '0') + month;
    day = (day > 9 ? '' : '0') + day;

    return `${year}-${month}-${day} ${hour}:${min}:${second}`;
}
const Comment = ({ commentData, comments, setComments }) => {
    const [ newComment, setNewComment ] = useState('');
    const username = JSON.parse(sessionStorage.getItem('user'))
        ? JSON.parse(sessionStorage.getItem('user')).username
        : '';
    const name = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).name : '';
    const handleAnswer = (e) => {
        if (newComment.length > 0) {
            axios
                .post(`/api/comments/${commentData.id}/${username}`, {
                    content: newComment
                })
                .then((res) => {
                    setNewComment('');
                    setComments([
                        ...comments,
                        {
                            content: newComment,
                            createdAt: res.data.createdAt,
                            id: res.data.commentId,
                            owner: name
                        }
                    ]);
                })
                .catch((err) => {
                    console.log(err);
                });
            axios
                .post(`/api/notifications/create/${username}?type=bình luận`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        e.preventDefault();
    };
    return (
        <div className="pop-up-post">
            <div className="post-content">
                <div className="post-author-and-time">
                    <p className="post-of-sb">{commentData.owner}</p>
                    <div className="separator" />
                    <p className="time-taken">. {changeDateFormat(commentData.createdAt)}</p>
                </div>
                <div className="post-header">
                    <p>Tiêu đề: </p>
                    <div className="separator" />
                    <p>{commentData.title}</p>
                </div>
                <hr />
                <p className="post-detail">{commentData.content}</p>
                <hr />
            </div>
            <div className="typeComment">
                <input
                    type="text"
                    name="commentDetail"
                    id="commentDetail"
                    placeholder="Nhập bình luận..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <input type="submit" value="Trả lời" id="answerCommentButton" onClick={handleAnswer} />
            </div>
            {/* <OnlyCmt data={commentData.comments} postId={commentData.id} /> */}
            <CommentList comments={comments} setComments={setComments} postId={commentData.id} />
        </div>
    );
};

export default Comment;
