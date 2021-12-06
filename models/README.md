### Collections
This is collections we used in this project.

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

**Messages**
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