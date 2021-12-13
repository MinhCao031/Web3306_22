import React from 'react';
import './Comment.css';
import axios from 'axios';
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
const CommentChildren = ({ id, owner, createdAt, content, postId, setComments, comments }) => {
    const role = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).role : '';
    const handleDelete = (e) => {
        axios
            .delete(`/api/comments/${postId}/${id}`)
            .then((res) => {
                setComments(comments.filter((comment) => comment.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
        e.preventDefault();
    };
    return (
        <div className="single-comment">
            <div className="comment-header">
                <p className="comment-author">{owner}</p>
                <div className="separator" />
                <p className="time-ago">{changeDateFormat(createdAt)}</p>
                {role === 'Teacher' && (
                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleDelete}>
                        Xóa
                    </span>
                )}
            </div>
            <div className="comment-detail">{content}</div>
        </div>
    );
};

export default CommentChildren;
