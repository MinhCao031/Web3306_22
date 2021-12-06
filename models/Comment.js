const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        commentId: {
            type: String
        },
        postId: {
            type: String
        },
        ownerId: {
            type: String
        },
        content: {
            type: String
        }
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
