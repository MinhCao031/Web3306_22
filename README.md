# UET - SMTA

---

*UET Student Management for Teaching Assistants*

## Introduction

This is the repository for web programming course in our university.

---

## Collections and APIs table

### Collections

**Users** 

```json
{ 
	"_id" : ObjectId("617b919ddc4b7befae44dab2"),
	"username" : 19021363,
	"password" : "$2b$12$E0NAqhAK.HjUvflctFooLOYMD4W3TkEwB90cCa9xu.QXIg/u379bS",
	"dateOfBirth": 02/03/2001
	"role" : "student",
	"firstName" : "Nguyen",
	"lastName" : "Thai25879",
	"phoneNumber" : 868466825,
	"email" : "thainguyen.uet@gmail.com"
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

[API routes](https://www.notion.so/728669a7dac44361ad1bfb3b90196a9a)

---

## Todo

- For frontend team:
    + Change user info 
    + Change user password
    + Get the managed class & students
    + Read a file
- For backend team:
    + Update Change user info feature
    + Update Change user password feature
    + Design API table and database collections
    + New feature: Get managed classes
    + New feature: Get managed classes' students
    + Beautify index.js and research more on proxy server + how to run frontend server and backend server in a single command
