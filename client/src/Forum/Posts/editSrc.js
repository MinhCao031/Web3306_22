function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var uuid = _interopDefault(require('react-uuid'));
require('reactjs-popup/dist/index.css');
var Popup = _interopDefault(require('reactjs-popup'));

var styles = {"section":"_12xdX","inputBox":"_2STY7","inputActions":"_9-5lp","postBtn":"_3oc4k","cancelBtn":"_36TCS","form":"_CXD_f","postComment":"_1blCt","displayComments":"_1SugS","timeAgo":"AgeAgo","halfDiv":"_qWiSF","userInfo":"_1i6uS","commentsTwo":"_155_V","fullName":"_2Axcq","replyBtn":"_1Njvz","userActions":"_34q_J","actionsBtn":"_3ypnz","replySection":"_l0opN","actionDiv":"_yEQPV","editBtn":"_333BI","deleteBtn":"_2YYVO","signBox":"_1Vv8n","signLine":"_1Ogr8","loginBtn":"_1Oc7K","signBtn":"_20VaH"};

var ActionContext = React.createContext();

var ActionProvider = function ActionProvider(_ref) {
  var children = _ref.children,
      currentUser = _ref.currentUser,
      setComment = _ref.setComment,
      comments = _ref.comments,
      signinUrl = _ref.signinUrl,
      customInput = _ref.customInput;

  var _useState = React.useState([]),
      replies = _useState[0],
      setReplies = _useState[1];

  var _useState2 = React.useState(),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = React.useState([]),
      editArr = _useState3[0],
      setEdit = _useState3[1];

  React.useEffect(function () {
    if (currentUser) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  var handleAction = function handleAction(id, edit) {
    edit ? setEdit([].concat(editArr, [id])) : setReplies([].concat(replies, [id]));
  };

  var handleCancel = function handleCancel(id, edit) {
    if (edit) {
      var list = [].concat(editArr);
      var newList = list.filter(function (i) {
        return i !== id;
      });
      setEdit(newList);
    } else if (!edit) {
      var _list = [].concat(replies);

      var _newList = _list.filter(function (i) {
        return i !== id;
      });

      setReplies(_newList);
    }
  };

  var onSubmit = function onSubmit(text, parentId, child) {
    if (text.length > 0) {
      if (!parentId && !child) {
        setComment([].concat(comments, [{
          userId: currentUser.userId,
          comId: uuid(),
          fullName: currentUser.name,
          text: text
        }]));
      } else if (parentId && child) {
        var newList = [].concat(comments);
        var index = newList.findIndex(function (x) {
          return x.comId === parentId;
        });
        newList[index].replies.push({
          userId: currentUser.userId,
          comId: uuid(),
          fullName: currentUser.name,
          text: text
        });
        setComment(newList);
      } else if (parentId && !child) {
        var _newList2 = [].concat(comments);

        var _index = _newList2.findIndex(function (x) {
          return x.comId === parentId;
        });

        var newReplies = _newList2[_index].replies === undefined ? [] : [].concat(_newList2[_index].replies);
        newReplies.push({
          userId: currentUser.userId,
          comId: uuid(),
          fullName: currentUser.name,
          text: text
        });
        _newList2[_index].replies = newReplies;
        setComment(_newList2);
      }
    }
/*EDITconsole.log(comments);*/
  };

  var editText = function editText(id, text, parentId) {
    if (parentId === undefined) {
      var newList = [].concat(comments);
      var index = newList.findIndex(function (x) {
        return x.comId === id;
      });
      newList[index].text = text;
      setComment(newList);
    } else if (parentId !== undefined) {
      var _newList3 = [].concat(comments);

      var _index2 = _newList3.findIndex(function (x) {
        return x.comId === parentId;
      });

      var replyIndex = _newList3[_index2].replies.findIndex(function (i) {
        return i.comId === id;
      });

      _newList3[_index2].replies[replyIndex].text = text;
      setComment(_newList3);
    }
  };

  var deleteText = function deleteText(id, parentId) {
    if (parentId === undefined) {
      var newList = [].concat(comments);
      var filter = newList.filter(function (x) {
        return x.comId !== id;
      });
      setComment(filter);
    } else if (parentId !== undefined) {
      var _newList4 = [].concat(comments);

      var index = _newList4.findIndex(function (x) {
        return x.comId === parentId;
      });

      var _filter = _newList4[index].replies.filter(function (x) {
        return x.comId !== id;
      });

      _newList4[index].replies = _filter;
      setComment(_newList4);
    }
  };

  var submit = function submit(cancellor, text, parentId, edit, setText, child) {
    if (edit) {
      editText(cancellor, text, parentId);
      handleCancel(cancellor, edit);
      setText('');
    } else {
      onSubmit(text, parentId, child);
      handleCancel(cancellor);
      setText('');
    }
  /*EDIT*/console.log(_ref.comments);
  };

  return /*#__PURE__*/React__default.createElement(ActionContext.Provider, {
    value: {
      onSubmit: onSubmit,
      userId: currentUser && currentUser.userId,
      handleAction: handleAction,
      handleCancel: handleCancel,
      replies: replies,
      setReplies: setReplies,
      editArr: editArr,
      onEdit: editText,
      onDelete: deleteText,
      signinUrl: signinUrl,
      user: user,
      customInput: customInput,
      submit: submit
    }
  }, children);
};

var InputField = function InputField(_ref) {
  var cancellor = _ref.cancellor,
      parentId = _ref.parentId,
      child = _ref.child,
      value = _ref.value,
      edit = _ref.edit,
      main = _ref.main;

  var _useState = React.useState(''),
      text = _useState[0],
      setText = _useState[1];

  var handleChange = function handleChange(e) {
    setText(e.target.value);
  };

  React.useEffect(function () {
    setText(value);
  }, [value]);

  var actions = React.useContext(ActionContext);

  return /*#__PURE__*/React__default.createElement("form", {
    className: styles.form,
    style: !child && !edit && main === undefined ? {
      marginLeft: 36
    } : {
      marginLeft: 8
    }
  }, /*#__PURE__*/React__default.createElement("input", {
    className: styles.postComment,
    type: "text",
    placeholder: "Nhập bình luận của bạn.",
    component: "input",
    value: text,
    style: {'font-family':'mulish'},
    onChange: handleChange
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles.inputActions
  }, /*#__PURE__*/React__default.createElement("button", {
    className: styles.postBtn,
    onClick: function onClick() {
      return edit === true ? actions.submit(cancellor, text, parentId, true, setText) : actions.submit(cancellor, text, parentId, false, setText);
    },
    type: "button",
    disabled: !text,
    style: !text ? {
      backgroundColor: '#84dcff',
      'font-family':'mulish'
    } : {
      backgroundColor: '#30c3fd',
      'font-family':'mulish'
    }
  }, "Bình luận"), (text || parentId) && /*#__PURE__*/React__default.createElement("button", {
    className: styles.cancelBtn, style: {'font-family':'mulish'},
    onClick: function onClick() {
      return edit ? actions.handleCancel(cancellor, edit) : actions.handleCancel(cancellor);
    }
  }, "Hủy")));
};
var modal = {
  color: 'purple',
  fontfamily: 'Mulish',
  fontSize: '16px'
};
var modalClose = {
  color: 'purple',
  cursor: 'pointer',
  position: 'absolute',
  display: 'block',
  padding: '2px 5px',
  lineHeight: '20px',
  right: '-10px',
  top: '-10px',
  fontfamily: 'Mulish',
  fontSize: '24px',
  background: '#ffffff',
  borderRadius: '18px',
  border: '1px solid #cfcece',
  outline: 'none'
};
var modalHeader = {
  color: 'purple',
  width: '100%',
  borderBottom: '1px solid gray',
  fontfamily: 'Mulish',
  fontSize: '18px',
  textAlign: 'center',
  padding: '5px'
};
var modalContent = {
  color: 'purple',
  fontfamily: 'Mulish',
  width: '100%',
  padding: '10px 10px'
};
var modalActions = {
  color: 'red',
  fontfamily: 'Mulish',
  width: ' 100%',
  padding: ' 10px 5px',
  margin: ' auto',
  textAlign: ' center'
};
var modalActionBtn = {
  color: 'red',
  fontfamily: 'Mulish',
  backgroundColor: 'transparent',
  outline: 'none',
  border: '1px solid gray',
  padding: '4px 12px',
  cursor: 'pointer'
};
var modalDelBtn = {
  color: 'red',
  fontfamily: 'Mulish',
  backgroundColor: 'transparent',
  outline: 'none',
  border: '1px solid gray',
  marginLeft: '10px',
  padding: '4px 12px',
  cursor: 'pointer'
};
var cmtFullName = {
  'font-family': 'Mulish',
  'font-style': 'normal',
  'font-weight': 'bold',
  'font-size': '18px',
  'line-height': '23px',
  'display': 'flex',
  'align-items': 'center',
  'letter-spacing': '0.3px',
  'color': '#404E68'
};
var cmtTimeAgo = {
  'font-family': 'Mulish',
  'font-style': 'normal',
  'font-weight': 600,
  'font-size': '10px',
  'line-height': '13px',
  'display': 'flex',
  'align-items': 'center',
  'letter-spacing': '0.05em',
  'color': '#404E68'
}
var cmtContent = {
  'font-family': 'Mulish',
  'font-style': 'normal',
  'font-weight': 'bold',
  'font-size': '13px',
  'line-height': '16px',
  'letter-spacing': '0.05em'
}

var CommentStructure = function CommentStructure(_ref) {
  var i = _ref.i,
      reply = _ref.reply,
      parentId = _ref.parentId;
  var actions = React.useContext(ActionContext);
  var edit = true;
  return /*#__PURE__*/React__default.createElement("div", 
  {className: styles.halfDiv}, 
  /*#__PURE__*/React__default.createElement("div", 
    {
      className: styles.userInfo,
      style: reply && {
        marginLeft: 15,
        marginTop: '6px'
      }
    }, 
    /*#__PURE__*/React__default.createElement("div", {className: styles.commentsTwo}, 
      /*#__PURE__*/React__default.createElement("div", {className: styles.fullName, style:cmtFullName}, i.fullName, " "),
      /*#__PURE__*/React__default.createElement("div", {className: styles.fullName, style:cmtTimeAgo}, i.timeAgo, " "),
    ),
    /*#__PURE__*/React__default.createElement("div", {style:cmtContent}, i.text),
    /*#__PURE__*/React__default.createElement("div", {className: styles.commentsTwo}, 
      /*#__PURE__*/React__default.createElement("div", {className: styles.fullName}, " "), 
        /*#__PURE__*/React__default.createElement("div", {className: styles.fullName}, 
          /*#__PURE__*/React__default.createElement("button", 
            {className: styles.replyBtn, style: {'font-family':'mulish'}, onClick: function onClick() 
            { return actions.handleAction(i.comId); },
            disabled: !actions.user
          }, ' ', " Trả lời"
        )
      )    
    ),  
  ), 
  /*#__PURE__*/React__default.createElement("div", {
    className: styles.userActions
  }, actions.userId === i.userId && actions.user && /*#__PURE__*/React__default.createElement(Popup, {
    role: "tooltip",
    trigger: /*#__PURE__*/React__default.createElement("button", {
      className: styles.actionsBtn
    }),
    position: "right center",
    nested: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.actionDiv
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    className: styles.editBtn,
    onClick: function onClick() {
      return actions.handleAction(i.comId, edit);
    }
  }, ' ', "edit")), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Popup, {
    trigger: /*#__PURE__*/React__default.createElement("button", {
      className: styles.deleteBtn
    }, " delete"),
    modal: true,
    nested: true
  }, function (close) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "modal",
      style: modal
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "close",
      onClick: close,
      style: modalClose
    }, "\xD7"), /*#__PURE__*/React__default.createElement("div", {
      className: "header",
      style: modalHeader
    }, ' ', "Delete Comment", ' '), /*#__PURE__*/React__default.createElement("div", {
      className: "content",
      style: modalContent
    }, ' ', "Delete your comment permanently?"), /*#__PURE__*/React__default.createElement("div", {
      className: "actions",
      style: modalActions
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "button",
      style: modalActionBtn,
      onClick: function onClick() {
        actions.onDelete(i.comId, parentId);
        close();
      }
    }, "Delete"), /*#__PURE__*/React__default.createElement("button", {
      className: "button",
      style: modalDelBtn,
      onClick: function onClick() {
        close();
      }
    }, "Cancel")));
  }))))));
};

var DisplayComments = function DisplayComments(_ref) {
  var comments = _ref.comments;
  var actions = React.useContext(ActionContext);
  return /*#__PURE__*/React__default.createElement("div", null, comments.map(function (i, index) {
    return /*#__PURE__*/React__default.createElement("div",
    {key: i.comId}, 
    actions.editArr.filter(function (id) {return id === i.comId;}).length !== 0
    ? actions.customInput
      ? actions.customInput({
        cancellor: i.comId,
        value: i.text,
        handleCancel: actions.handleCancel,
        submit: actions.submit,
        edit: true
      })
      : /*#__PURE__*/React__default.createElement(InputField, {
        cancellor: i.comId,
        value: i.text,
        edit: true
      })
    : /*#__PURE__*/React__default.createElement(CommentStructure, {
      i: i,
      handleEdit: function handleEdit() {
        return actions.handleAction;
      }
    }), 
    actions.replies.filter(function (id) {return id === i.comId;}).length !== 0
      && (actions.customInput 
        ? actions.customInput({
          cancellor: i.comId,
          parentId: i.comId,
          submit: actions.submit,
          handleCancel: actions.handleCancel,
          edit: false
        })
        : /*#__PURE__*/React__default.createElement(InputField, {
          cancellor: i.comId,
          parentId: i.comId
        })
      ),
    /*#__PURE__*/React__default.createElement("div", {className: styles.replySection}, 
      i.replies && i.replies.map(function (a, index) {
        return /*#__PURE__*/React__default.createElement("div", 
        {key: a.comId}, 
        actions.editArr.filter(function (id) {
          return id === a.comId;
        }).length !== 0 
          ? actions.customInput 
            ? actions.customInput({
              cancellor: a.comId,
              value: a.text,
              handleCancel: actions.handleCancel,
              edit: true,
              parentId: i.comId,
              submit: actions.submit
            })
            : /*#__PURE__*/React__default.createElement(InputField, {
              cancellor: a.comId,
              value: a.text,
              edit: true,
              parentId: i.comId
            })
          : /*#__PURE__*/React__default.createElement(CommentStructure, {
            i: a,
            reply: true,
            parentId: i.comId,
            handleEdit: function handleEdit() {
              return actions.handleAction;
            }
          }), 
        actions.replies.filter(function (id) {return id === a.comId;}).length !== 0 
          && (actions.customInput
            ? actions.customInput({
              cancellor: a.comId,
              parentId: i.comId,
              child: true,
              submit: actions.submit,
              handleCancel: actions.handleCancel,
              edit: false
            })
            : /*#__PURE__*/React__default.createElement(InputField, {
              cancellor: a.comId,
              parentId: i.comId,
            child: true
        })));
    })));
  }));
};

var SignField = function SignField() {
  var actions = React.useContext(ActionContext);

  var handleDivClick = function handleDivClick(e) {
    if (e.target.name === 'login') {
      window.location.href = actions.signinUrl;
    }
  };

  return /*#__PURE__*/React__default.createElement("div",
    {className: styles.signBox}, 
    React__default.createElement("div",
      {className: styles.signLine}, 
      "Log in or sign up to leave a comment"), 
    React__default.createElement("div", null,
      React__default.createElement("button", 
        {
          className: styles.loginBtn,
          name: "login",
          onClick: function onClick(e) {
            return handleDivClick(e);
          }
        }, 
        "Log In"
      ), 
    )
  );
};

var Input = function Input() {
  var action = React.useContext(ActionContext);
  return action.customInput ? action.customInput({
    main: true,
    handleCancel: action.handleCancel,
    submit: action.submit
  }) : /*#__PURE__*/React__default.createElement(InputField, {
    main: true
  });
};

var CommentSection = function CommentSection(_ref) {
  var commentsArray = _ref.commentsArray,
      currentUser = _ref.currentUser,
      setComment = _ref.setComment,
      signinUrl = _ref.signinUrl,
      customInput = _ref.customInput;

  var _useState = React.useState(commentsArray),
      comments = _useState[0],
      setComments = _useState[1];

  React.useEffect(function () {
    setComments(commentsArray);
  }, [commentsArray]);
  return /*#__PURE__*/React__default.createElement(ActionProvider, {
    currentUser: currentUser,
    setComment: setComment,
    comments: comments,
    signinUrl: signinUrl,
    customInput: customInput
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.section
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.inputBox
  }, !currentUser ? /*#__PURE__*/React__default.createElement(SignField, null) : /*#__PURE__*/React__default.createElement(Input, null)), /*#__PURE__*/React__default.createElement("div", {
    className: styles.displayComments
  }, /*#__PURE__*/React__default.createElement(DisplayComments, {
    comments: comments
  })
  )));
};

exports.CommentSection = CommentSection;
