const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const result = {
  message: 'A message from server',
  success: false,
};

function getResult(status, msg = 'Something went wrong') {
  result.message = msg;
  result.success = status;
  return result;
}

module.exports.getPosts = async function (req, res) {
  const posts = await Post.find();

  if (posts.length > 0) {
    const results = [];

    for (const post of posts) {
      const foundUser = await User.findOne({ username: post.ownerId });
      if (foundUser) {
        const result = {
          id: post._id,
          owner: foundUser.name,
          title: post.title,
          createdAt: post.createdAt,
          quantityComments: post.commentIds.length,
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

module.exports.getPost = async function (req, res) {
  const foundPost = await Post.findById(req.params.post_id).catch((err) => {
    return res.json(getResult(false, err));
  });

  if (foundPost) {
    const foundOwner = await User.findOne({
      username: foundPost.ownerId,
    }).catch((err) => {
      return res.json(getResult(false, err));
    });

    const result = {
      id: foundPost._id,
      owner: foundOwner.name,
      title: foundPost.title,
      content: foundPost.content,
      comments: [],
      createdAt: foundPost.createdAt,
    };

    for (const id of foundPost.commentIds) {
      const foundComment = await Comment.findOne({ commentId: id }).catch(
        (err) => {
          return res.json(getResult(false, err));
        }
      );
      if (foundComment) {
        const foundUser = await User.findOne({
          username: foundComment.ownerId,
        });
        const comment = {
          id: foundComment.commentId,
          owner: foundUser.name,
          content: foundComment.content,
          createdAt: foundComment.createdAt,
          updatedAt: foundComment.updatedAt,
        };

        result.comments.push(comment);
      }
    }

    return res.json(result);
  } else {
    return res.json(getResult(true, 'No post found'));
  }
};

module.exports.createPost = async function (req, res) {
  const newPost = new Post({
    ownerId: req.params.user_id,
    content: req.body.content,
    title: req.body.title,
  });

  await newPost.save().catch((err) => {
    return res.json(getResult(false, err));
  });
  const foundPost = await Post.findOne({
    content: req.body.content,
  }).catch((err) => {
    return res.json(getResult(false, err));
  });

  return res.json(foundPost);
};

module.exports.updatePost = async function (req, res) {
  const foundPost = Post.findById(req.params.post_id);

  if (foundPost) {
    if (foundPost.title != req.body.title) {
      foundPost.title = req.body.title;
    }
    if (foundPost.content != req.body.content) {
      foundPost.content = req.body.content;
    }

    foundPost.save().catch((err) => {
      return res.json(getResult(false, err));
    });
  } else {
    return res.json(getResult(false));
  }
};

module.exports.deletePost = async function (req, res) {
  Post.findByIdAndRemove(req.params.post_id).catch((err) => {
    return res.json(getResult(false, err));
  });
  return res.status(200).json(getResult(true, 'OK'));
};
