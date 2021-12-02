# UET - SMTA

_UET Student Management for Teaching Assistants_

## Introduction

This is the repository for web programming course in our university.

## Create testing data

For Windows:

- You need to install MongoDB and MongoDB database tools. You can find more information in the link below.

  [[MongoDB installation on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)]

  [[MongoDB Database tools on Windows](https://docs.mongodb.com/database-tools/installation/installation-windows/)]

For Linux:

- Just need to follow the instructions in the [documentation page](https://docs.mongodb.com/manual/administration/install-on-linux/) for your Linux distro.

Next step, make sure you are in /server/ directory. If you do, copy and paste these commands below to create testing data.

**Users data**

```bash
# Create testing user accounts in mongoDB.
node UserSeeds.js
```

**Classes data**

```bash
# Import testing classes information to mongoDB.
node ClassSeeds.js
```

## Collections and APIs routing table

### Collections

**Users**

```json
{
	"_id" : ObjectId("617b919ddc4b7befae44dab2"),
	"username" : 19021363,
	"password" : "$2b$12$E0NAqhAK.HjUvflctFooLOYMD4W3TkEwB90cCa9xu.QXIg/u379bS",
	"role" : "Student",
	"level": "Thành viên",
	"name" : "Nguyễn Thái",
	"dateOfBirth": 2001-03-02,
	"gender": "Nam",
	"phoneNumber" : 868466825,
	"email" : "19021363@gmail.com",
	"hometown" : "Hải Dương",
	"introduction": "A daily-updated person",
	"fieldOfStudy": "Computer Science",
	"gpa": 3.0,
	"drl": 80
}
```

**Classes**

```json
{
	"_id" : ObjectId("617b919ddc4b7befae44dab2"),
	"classId" : 1,
	"className": "K64_CACLC2",
	"classType": "CLC",
	"teacherId" : 10012019,
	"studentIDs" : [
			"19021363",
			"19021364",
			"19021365"
	],
	"leaderId": "19021365"
}
```

**Conversations**
```json
{ 
	"_id" : ObjectId("61a38e6c244d68ec88352f10"),
	"members" : [ "20191000", "19021319" ], 
	"createdAt" : ISODate("2021-11-28T14:13:00.960Z"),
	"updatedAt" : ISODate("2021-11-28T14:13:00.960Z")
}
```

**Conversations**
```json
{ 
	"_id" : ObjectId("61a89b33bae553ad23527369"),
	"conversationId" : "6198033efea823b54adf8050",
	"sender" : "19021364", "text" : "Hello from Tung",
	"createdAt" : ISODate("2021-12-02T10:08:51.042Z"),
	"updatedAt" : ISODate("2021-12-02T10:08:51.042Z"),
}
```


**Posts**
```json
{ 
	"_id" : ObjectId("61a89b49bae553ad2352737b"),
	"ownerId" : "61a4af1267f7a7acc91bb1f1",
	"title" : "The way to valley",
	"content" : "Qua thung lũng đi lối nào hả các bác?",
	"commentIds" : [ ],
	"createdAt" : ISODate("2021-12-02T10:09:13.415Z"),
	"updatedAt" : ISODate("2021-12-02T10:09:13.415Z")
}
```

**Comments**

```json
{ 
	"_id" : ObjectId("61a89b59bae553ad23527381"),
	"commentId" : "OnawCz5dt6OQNOPS7DZXO", 
	"postId" : "61a4e059ad98aaf524155c27",
	"ownerId" : "6JS3HuluT2tduc9ksy31z",
	"content" : "This is a new comment",
	"createdAt" : ISODate("2021-12-02T10:09:29.027Z"),
	"updatedAt" : ISODate("2021-12-02T10:09:29.027Z")
}
```

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
| Messages     | show            | /api/messages/:conversationId                      | GET     | Get all messages in a conversation |
|              | create          | /api/messages                                      | POST    | Add message                        |

We also have Postman collection in server/data/uet-smta.postman_collection.json file, just import this file into Postman to test out API.

## How to run this application?

This project is still under development process. If you want to run this application, you need to explicitly initialize two development server:

- Change your current directory to the folder /client/ and initialize ReactJS development server (frontend server):

```
cd client
npm start
```

- Change your current directory to the folder /server/ and initialize ExpressJS development server (backend server):

```
cd server
node server.js
```

By default, frontend server runs on http://locahost:3000 and backend server runs on http://localhost:5000.
Enjoy!
