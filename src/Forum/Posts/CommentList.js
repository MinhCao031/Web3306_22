import React from 'react';
import CommentChildren from './CommentChildren';
import './Comment.css';
const CommentList = ({ comments, setComments, postId }) => {
  return (
    <>
      {comments &&
        comments.map((cmt) => {
          console.log(cmt);
          return (
            <CommentChildren
              id={cmt.id}
              owner={cmt.owner}
              createdAt={cmt.createdAt}
              content={cmt.content}
              postId={postId}
              setComments={setComments}
              comments={comments}
            />
          );
        })}
    </>
  );
};

export default CommentList;
