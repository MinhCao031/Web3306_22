const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        postId: {
            type: String
        },
        ownerId: {
            type: String
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        commentIds: {
            type: [ String ]
        }
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
