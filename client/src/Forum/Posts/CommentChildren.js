import React from 'react';
import './Comment.css';
import axios from 'axios';
const CommentChildren = ({
  id,
  owner,
  createdAt,
  content,
  postId,
  setComments,
  comments,
}) => {
  const role = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).role
    : '';
  const handleDelete = (e) => {
    axios
      .delete(`/comments/${postId}/${id}`)
      .then((res) => {
        console.log(res);
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
        <div className="separator"></div>
        <p className="time-ago">{createdAt}</p>
        {role === 'Teacher' && (
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={handleDelete}
          >
            Xóa
          </span>
        )}
      </div>
      <div className="comment-detail">{content}</div>
    </div>
  );
};

export default CommentChildren;
