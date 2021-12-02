import React, { Component } from 'react';
import { Remarkable } from 'remarkable';
import './Comment.css';

//Original way to add markups that React prevents
class Comment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render = () => {
    var md = new Remarkable();
    return (
      <div className="single-comment">
        <div className="comment-header">
          <p className="comment-author">{this.props.fullName}</p>
          <div className="separator"></div>
          <p className="time-ago">{this.props.timeAgo}</p>
        </div>
        {/* {md.render(this.props.children.toString())} */}
        <div className="comment-detail">{this.props.text}</div>
      </div>
    );
  };
}

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment
          fullName={comment.fullName}
          timeAgo={comment.timeAgo}
          key={comment.id}
          text={comment.text}
        />
      );
    });
    return <div className="commentList">{commentNodes}</div>;
  };
}

class OnlyCmt extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className="only-cmt">
        <CommentList data={this.props.data} />
      </div>
    );
  };
}

export default OnlyCmt;
//  <OnlyCmt data={data} />
