import React, { PureComponent, useState } from 'react';
import OnlyCmt from './OnlyCmt';
import './Comment.css';
import axios from 'axios';
import CommentList from './CommentList';
const Comment = ({ commentData, comments, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const username = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).username
    : '';
  const name = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).name
    : '';
  const handleAnswer = (e) => {
    if (newComment.length > 0) {
      axios
        .post(`/comments/${commentData.id}/${username}`, {
          content: newComment,
        })
        .then((res) => {
          setNewComment('');
          setComments([
            ...comments,
            {
              content: newComment,
              createdAt: res.data.createdAt,
              id: res.data.commentId,
              owner: name,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Bạn chưa nhập nội dung');
    }
    e.preventDefault();
  };
  return (
    <div className="pop-up-post">
      <div className="post-content">
        <div className="post-author-and-time">
          <p className="post-of-sb">{commentData.owner}</p>
          <div className="separator"></div>
          <p className="time-taken">. {commentData.createdAt}</p>
        </div>
        <div className="post-header">
          <p>Tiêu đề: </p>
          <div className="separator"></div>
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
        <input
          type="submit"
          value="Trả lời"
          id="answerCommentButton"
          onClick={handleAnswer}
        />
      </div>
      {/* <OnlyCmt data={commentData.comments} postId={commentData.id} /> */}
      <CommentList
        comments={comments}
        setComments={setComments}
        postId={commentData.id}
      />
    </div>
  );
};

export default Comment;
