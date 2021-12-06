
### APIs routing table

| Resources    | Action          | Routes                                             | Methods | Description                        |
| ------------ | --------------- | -------------------------------------------------- | ------- | ---------------------------------- |
| login        | login           | /api/auth/login                                    | POST    | Log in                             |
| logout       | logout          | /api/auth/logout                                   | GET     | Log out                            |
| Users        | show            | /api/users/:user_id/show                           | GET     | Show user's profile                |
|              | update          | /api/users/:user_id/update                         | POST    | Update user's profile              |
|              | change password | /api/users/:user_id/set_password                   | POST    | Change user's password             |
| Classes      | show            | /api/classes/:user_id/show                         | GET     | Get managed class and students     |
|              | show            | /api/classes/students?role=&user_id=&class_id=     | POST    | Get students in a class            |
|              | show            | /api/classes/:class_id/grades                      | GET     | Get grade statistic                |
|              | create          | /api/classes/:class_id/import                      | POST    | Import students to a class         |
|              | create          | /api/classes/:class_id/add-student                 | POST    | Add a student to a class           |
|              | create          | /api/classes/:class_id/update                      | POST    | Update students to a class         |
| Conversation | show            | /api/conversations/find/:firstUserId/:secondUserId | GET     | Get conversation between two users |
|              | show            | /api/conversations/:userId                         | GET     | Get all conversations of an user   |
|              | create          | /api/conversations                                 | POST    | Create conversation                |
| Messages     | show            | /api/messages/:conversationId                      | GET     | Get all messages in a conversation |
|              | create          | /api/messages                                      | POST    | Add a message                      |
| Post         | show            | /api/posts                                         | GET     | Get all posts                      |
|              | show            | /api/posts/show/:post_id                           | GET     | Get a post                         |
|              | create          | /api/posts/create/:user_id                         | POST    | Create new post                    |
|              | update          | /api/posts/update/:post_id                         | GET     | Update a post                      |
|              | delete          | /api/posts/delete/:post_id                         | GET     | Delete a post                      |
| Comment      | create          | /api/comments/:post_id/:user_id                    | POST    | Create a comment                   |
|              | update          | /api/comments/:post_id/:user_id/:comment_id        | POST    | Update a comment                   |
|              | delete          | /api/comments/:post_id/:comment_id                 | DELETE  | Delete a comment                   |
| Notifcation  | create          | /api/notifications/create/:user_id                 | POST    | Create a notificatio               |
|              | show            | /api/notifications/show/:user_id                   | GET     | Get all notification               |

We also have Postman collection in server/data/uet-smta.postman_collection.json file, just import this file into Postman to test out API.