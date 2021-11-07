# UET - SMTA

*UET Student Management for Teaching Assistants /turn*

## Introduction

This is the repository for web programming course in our university.

## Create testing data

For Windows:
 - You need to install MongoDB and MongoDB database tools. You can find more information in the link below.
 
	[[MongoDB installation on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)]
	
	[[MongoDB Database tools on Windows](https://docs.mongodb.com/database-tools/installation/installation-windows/)]

For Linux:
 - Just need to follow the instructions in the [documentation page](https://docs.mongodb.com/manual/administration/install-on-linux/) for your Linux distro.

**Users data**

```bash
# Create fake user accounts.
node server/userSeed.js
```

**Classes data**

```bash
# Import fake classes information to mongoDB.
mongoimport --db uet-smta --collection classes --type json --file server/data/classes.json --jsonArray
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
	"gpa": 3.0
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
	]
}
```

### APIs routing table

| Resources | Action | Routes | Methods | Description|
| ------ | ------ | ------ | ------ | ------ |
| login | login | /login | POST | Login to user account|
| logout | logout | /logout |   |   |
| Users | update | /users/update | POST | Update user's profile |
|  | Change password | /users/set_password | POST | Change user's password |
| Classes | show | /classes/ | GET | Get managed class and students |

## Todo

- For frontend team:
   
- For backend team:
