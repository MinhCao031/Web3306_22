const { nanoid } = require('nanoid');

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
                    id: post.postId,
                    owner: foundUser.name,
                    ownerId: foundUser.username,
                    title: post.title,
                    createdAt: post.createdAt,
                    quantityComments: post.commentIds.length
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
    const foundPost = await Post.findOne({ postId: req.params.post_id }).catch((err) => {
        return res.json(getResult(false, err));
    });

    if (foundPost) {
        const foundUser = await User.findOne({
            username: foundPost.ownerId
        }).catch((err) => {
            return res.json(getResult(false, err));
        });

        const result = {
            id: foundPost.postId,
            owner: foundUser.name,
            title: foundPost.title,
            content: foundPost.content,
            comments: [],
            createdAt: foundPost.createdAt
        };

        for (const id of foundPost.commentIds) {
            const foundComment = await Comment.findOne({ commentId: id }).catch((err) => {
                return res.json(getResult(false, err));
            });
            if (foundComment) {
                const foundUser = await User.findOne({
                    username: foundComment.ownerId
                });
                const comment = {
                    id: foundComment.commentId,
                    owner: foundUser.name,
                    content: foundComment.content,
                    createdAt: foundComment.createdAt,
                    updatedAt: foundComment.updatedAt
                };

                result.comments.push(comment);
            }
        }

        return res.json(result);
    } else {
        return res.json(getResult(true, 'No post found'));
    }
};

module.exports.createPost = async function(req, res) {
    const newPost = new Post({
        postId: nanoid(),
        ownerId: req.params.user_id,
        content: req.body.content,
        title: req.body.title
    });

    await newPost.save().catch((err) => {
        return res.json(getResult(false, err));
    });
    const foundPost = await Post.findOne({
        postId: newPost.postId
    }).catch((err) => {
        return res.json(getResult(false, err));
    });

    return res.json(foundPost);
};

module.exports.updatePost = async function(req, res) {
    const foundPost = await Post.findOne({ postId: req.params.post_id });

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
    try {
        const foundPost = await Post.findOne({ postId: req.params.post_id });

        if (foundPost) {
            for (const id of foundPost.commentIds) {
                await Comment.findOneAndRemove({ commentId: id });
            }
        }

        await Post.findOneAndRemove({ postId: req.params.post_id }).catch((err) => {
            return res.json(getResult(false, err));
        });
        return res.status(200).json(getResult(true, 'OK'));
    } catch (error) {
        console.error(error);
    }
};
