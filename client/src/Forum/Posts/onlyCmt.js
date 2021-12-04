import React, { Component } from 'react';
import './Comment.css';
import axios from 'axios';
class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const role = JSON.parse(sessionStorage.getItem('user'))
      ? JSON.parse(sessionStorage.getItem('user')).role
      : '';
    const handleDelete = (e) => {
      axios
        .delete(`/comments/${this.props.postId}/${this.props.id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      e.preventDefault();
    };
    return (
      <div className="single-comment">
        <div className="comment-header">
          <p className="comment-author">{this.props.owner}</p>
          <div className="separator"></div>
          <p className="time-ago">{this.props.createdAt}</p>
          {role === 'Teacher' && (
            <span
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={handleDelete}
            >
              Xóa
            </span>
          )}
        </div>
        <div className="comment-detail">{this.props.content}</div>
      </div>
    );
  };
}
class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const postId = this.props.postId;
    var listOfComments = [];
    for (let i in this.props.data) {
      listOfComments.push(
        <Comment
          id={i.id}
          owner={i.owner}
          createdAt={i.createdAt}
          key={i.quantityComments}
          content={i.content}
          postId={postId}
        />
      );
    }
    var commentNodes = Array.isArray(this.props.data)
      ? this.props.data.map(function (cmt) {
          return (
            <Comment
              id={cmt.id}
              owner={cmt.owner}
              createdAt={cmt.createdAt}
              key={cmt.quantityComments}
              content={cmt.content}
              postId={postId}
            />
          );
        })
      : null;
    return (
      <div className="commentList">
        {commentNodes == null ? listOfComments : commentNodes}
      </div>
    );
  };
}

class OnlyCmt extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className="only-cmt">
        <CommentList data={this.props.data} postId={this.props.postId} />
      </div>
    );
  };
}

export default OnlyCmt;
