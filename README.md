# UET - SMTA

*UET Student Management for Teaching Assistants*

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
Create testing user accounts in mongoDB.  
```bash
node UserSeeds.js
```

**Classes data**  
Import testing classes information to mongoDB.  
```bash
# Import fake classes information to mongoDB.
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

| Resources | Action | Routes | Methods | Description|
| ------ | ------ | ------ | ------ | ------ |
| login | login | /login | POST | Log in|
| logout | logout | /logout | GET | Log out |
| Users | show | /:user_id/show | GET | Show user's profile |
|  | update | /:user_id/update | POST | Update user's profile |
|  | change password | /:user_id/set_password | POST | Change user's password |
| Classes | show | /classes/:user_id/show | GET | Get managed class and students |
|  | show | /classes/:class_id/show/students | GET | Get students in a class |

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
   
- For backend team:
	- Research on notification feature
	- Research on real-time chat feature

