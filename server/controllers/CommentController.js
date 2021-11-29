const Comment = require('../models/Comment');
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

module.exports.createComment = async function(req, res) {
    const newComment = new Comment({
        postId: req.params.post_id,
        ownerId: req.params.user_id,
        content: req.body.content
    });
    console.log(newComment);
    await newComment.save().catch((err) => {
        return res.json(getResult(false, err));
    });

    const foundPost = await Post.findById(req.params.post_id);

    if (foundPost) {
        foundPost.commentIds.push(newComment._id);

        await foundPost.save().catch((err) => {
            return res.json(false, err);
        });
        return res.json(getResult(true, 'OK'));
    }
};
