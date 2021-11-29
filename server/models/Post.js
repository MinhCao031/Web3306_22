const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        ownerId: {
            type: String
        },
        content: {
            type: String
        },
        commentIds: {
            type: [ mongoose.Schema.Types.ObjectId ]
        }
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
