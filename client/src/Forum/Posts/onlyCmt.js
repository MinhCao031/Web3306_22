import React, { Component } from "react";
import { Remarkable } from 'remarkable';
import "./Comment.css";
import count from "./Comment";

//Original way to add markups that React prevents
class Comment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render = () => {
    // var md = new Remarkable();
    return (
      <div className="single-comment">
        <div className="comment-header">
          <p className="comment-author">
            {this.props.owner}
          </p>
          <div className="separator"></div>
          <p className="time-ago">
            {this.props.createdAt}
          </p>
        </div>
        {/* {md.render(this.props.children.toString())} */}
        <div className="comment-detail">
            {this.props.title}
        </div>
      </div>
    );
  }
};

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    var listOfComments = []
    for (let i in this.props.data) {
      listOfComments.push(
        <Comment 
          owner={i.owner}
          createdAt={i.createdAt}
          key={i.quantityComments}
          title={i.title}
        />
      );
    };
    var commentNodes = Array.isArray(this.props.data)
    ? this.props.data.map(function(cmt) {
      return (
        <Comment 
          owner={cmt.owner}
          createdAt={cmt.createdAt}
          key={cmt.quantityComments}
          title={cmt.title}
        />
      );
    })
    : null
    ;
    return (
      <div className="commentList">
        {commentNodes == null ? listOfComments : commentNodes}
      </div>
    );
  }
};



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
  }
};


export default OnlyCmt;
//  <OnlyCmt data={data} />