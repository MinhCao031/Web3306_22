import React, { PureComponent, useState } from 'react';
import OnlyCmt from './OnlyCmt';
import data from './data.json';
import './Comment.css';

const Comment = ({ commentData }) => {
  //const [comment, setComment] = useState(Array.from(commentData.comments));
  // const [yourCmt, setYourCmt] = useState({
  //   content: '',
  //   createdAt: '',
  //   id: '',
  //   owner: '',
  //   updatedAt: '',
  // });
  const [comments, setComments] = useState(commentData.comments);
  //const [cmtComponent, setCmtComponent] = useState(<OnlyCmt data={comment} />);

  const userId = '01a';
  const name = 'xyz';
  const signinUrl = '/';
  const signupUrl = '/';

  // let count = 0;
  // comment.map((each) => {
  //   count += 1;
  // });

  // const postCmt = () => {
  //   let newCmt = comment;
  //   newCmt.push(yourCmt);
  //   setComment(newCmt);
  //   setCmtComponent(<OnlyCmt data={comment} />);
  //   count += 1;
  //   console.log(comment);
  //   document.getElementById('commentDetail').value = '';
  // };

  // const saveCmt = () => {
  //   setYourCmt({
  //     id: count + 1,
  //     cmtId: '',
  //     fullName: name,
  //     timeAgo: '1 phút trước',
  //     text: document.getElementById('commentDetail').value,
  //   });
  //   console.log(document.getElementById('commentDetail').value);
  // };

  return (
    <div className="pop-up-post">
      <div className="post-content">
        <div className="post-author-and-time">
          <p className="post-of-sb">{commentData.owner}</p>
          <div className="separator"></div>
          <p className="time-taken">{commentData.createdAt}</p>
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
          //onChange={saveCmt}
        />
        <input
          type="submit"
          //onClick={postCmt}
          value="Trả lời"
        />
      </div>
      <p> Comments </p>
      {/* {comments &&
        comments.length > 0 &&
        comments.map((comment, index) => {
          return <OnlyCmt key={index} data={comment} />;
        })} */}
      {/* <OnlyCmt data={comment} /> */}
      {/* {cmtComponent} */}
    </div>
  );
};

export default Comment;
