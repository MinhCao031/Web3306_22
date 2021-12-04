const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const result = {
    message: 'A message from server',
    success: false
};

function getResult(status, msg = 'Something went wrong') {
    result.message = msg;
    result.success = status;
    return result;
}

module.exports.getPosts = async function(req, res) {
    const posts = await Post.find();

    if (posts.length > 0) {
        const results = [];

        for (const post of posts) {
            const foundUser = await User.findOne({ username: post.ownerId });
            if (foundUser) {
                const result = {
                    id: post._id,
                    owner: foundUser.name,
                    title: post.title
                };

                results.push(result);
            } else {
                return res.json(getResult(false));
            }
        }

        return res.json(results);
    } else {
        return res.json(getResult(true, 'No posts found'));
    }
};

module.exports.getPost = async function(req, res) {
    const foundPost = await Post.findById(req.params.post_id).catch((err) => {
        return res.json(getResult(false, err));
    });

    if (foundPost) {
        const foundOwner = await User.findOne({ username: foundPost.ownerId }).catch((err) => {
            return res.json(getResult(false, err));
        });

        const result = {
            id: foundPost._id,
            owner: foundOwner.name,
            title: foundPost.title,
            content: foundPost.content,
            commentIds: foundPost.commentIds,
            comments: [],
            createdAt: foundPost.createdAt
        };

        for (const id of foundPost.commentIds) {
            const foundComment = await Comment.findOne({ commentId: id }).catch((err) => {
                return res.json(getResult(false, err));
            });
            if (foundComment) {
                result.comments.push(foundComment.content);
            }
        }

        return res.json(result);
    } else {
        return res.json(getResult(true, 'No post found'));
    }
};

module.exports.createPost = async function(req, res) {
    const newPost = new Post({
        ownerId: req.params.user_id,
        content: req.body.content,
        title: req.body.title
    });

    await newPost.save().catch((err) => {
        return res.json(getResult(false, err));
    });

    return res.json(getResult(true, 'OK'));
};

module.exports.updatePost = async function(req, res) {
    const foundPost = await Post.findById(req.params.post_id);

    if (foundPost) {
        foundPost.title = req.body.title;
        foundPost.content = req.body.content;
        await foundPost.save().catch((err) => {
            return res.json(getResult(false, err));
        });
        return res.json(getResult(true, 'OK'));
    } else {
        return res.json(getResult(false));
    }
};

module.exports.deletePost = async function(req, res) {
    Post.findByIdAndRemove(req.params.post_id).catch((err) => {
        return res.json(getResult(false, err));
    });
    return res.json(true, 'OK');
};
