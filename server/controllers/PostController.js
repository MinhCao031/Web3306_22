const User = require('../models/User');
const Post = require('../models/Post');

const result = {
    message,
    success
};

function getResult(status, msg = 'Something went wrong') {
    result.message = msg;
    result.success = status;
    return result;
}

module.exports.getPosts = async function(req, res) {
    const posts = await Post.find();
    const results = [];

    if (posts.length) {
        for (const post of posts) {
            const foundUser = User.findOne({ username: post.ownerId });

            if (foundUser) {
                const result = {
                    id: post._id,
                    owner: foundUser.name,
                    content: post.content
                };

                results.push(result);
            } else {
                return res.json(getResult(false));
            }
        }
    } else {
        return res.json(getResult(true, 'No posts found'));
    }
};

module.exports.createPost = async function(req, res) {
    const newPost = new Post({
        ownerId: req.params.user_id,
        content: req.body.content
    });

    await newPost.save().catch((err) => {
        return res.json(getResult(false, err));
    });

    return res.json(getResult(true, 'OK'));
};

module.exports.updatePost = async function(req, res) {
    const foundPost = Post.findById(req.params.post_id);

    if (foundPost) {
        foundPost.content = req.body.content;

        foundPost.save().catch((err) => {
            return res.json(getResult(false, err));
        });
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
