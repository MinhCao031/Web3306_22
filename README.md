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
mongoimport --db uet-smta --collection classes --type json --file data/classes.json --jsonArray
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
	"dateOfBirth": 02/03/2001,
	"gender": "Nam",
	"phoneNumber" : 868466825,
	"email" : "thainguyen.uet@gmail.com",
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
	"className":"K64_CACLC2",
	"teacherId" : 10012019,
	"studentIDs" : [
			"19021363",
			"19021364",
			"19021365"
	],
	"leaderId": "19021365"
}
```

### APIs routing table

| Resources | Action          | Routes                           | Methods | Description                    |
| --------- | --------------- | -------------------------------- | ------- | ------------------------------ |
| login | login | /api/auth/login | POST | Log in |
| logout | logout | /api/auth/logout | GET | Log out |
| Users | show | /api/users/:user_id/show | GET | Show user's profile |
| | update | /api/users/:user_id/update | POST | Update user's profile |
| | change password | /api/users/:user_id/set_password | POST | Change user's password |
| Classes | show | /api/classes/:user_id/show | GET | Get managed class and students |
| | show | /api/classes/:class_id/students | GET | Get students in a class |
| Conversation   | show | /api/conversations/find/:firstUserId/:secondUserId | GET     | Get conversation between two users |
| | show| /api/conversations/:userId | GET | Get all conversations  of an user |
| | create| /api/conversations | POST | Create conversation |
| Messages   | show            | /api/messages/:conversationId           | GET     | Get all messages in a conversation |
| | create | /api/messages | POST | Add message |

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

## Todo

- For frontend team:
  - Create dashboard
  - Create filter function for table(Done)
  - CRUD for table(Done)
  - Create more classes display for teacher(Done)
  - Research on notification feature
  - Research on real-time chat feature
  - Add feature: redirect to login page when user haven't logged in yet 
- For backend team:
  - Research on notification feature
  - Research on real-time chat feature [DONE]
  - Add error handling for login [DONE]
  - Add quantity of students in a class [DONE]
  - Add new student in a class
  - Add import students feature [DONE]