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
            {this.props.fullName}
          </p>
          <div className="separator"></div>
          <p className="time-ago">
            {this.props.timeAgo}
          </p>
        </div>
        {/* {md.render(this.props.children.toString())} */}
        <div className="comment-detail">
            {this.props.text}
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
          fullName={i.fullName}
          timeAgo={i.timeAgo}
          key={i.id}
          text={i.text}
        />
      );
    };
    var commentNodes = Array.isArray(this.props.data)
    ? this.props.data.map(function(cmt) {
      return (
        <Comment 
          fullName={cmt.fullName}
          timeAgo={cmt.timeAgo}
          key={cmt.id}
          text={cmt.text}
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
  // postCmt = () => {
  //   let newCmt = this.props.data;
  //   console.log(newCmt)
  //   newCmt = newCmt.push(this.state.yourCmt)
  //   this.props = newCmt
  //   // count += 1
  //   console.log(this.props);
  // }

  // saveCmt = () => {
  //   this.state.yourCmt = {
  //     id: count+1,
  //     cmtId: "",
  //     fullName: this.state.name,
  //     timeAgo: "1 phút trước",
  //     text: document.getElementById("commentDetail").value,
  //   }
  //   console.log(document.getElementById("commentDetail").value)
  // }
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