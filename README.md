# UET - SMTA

_UET Student Management for Teaching Assistants_

## Introduction

This is the repository for web programming course in our university.

## Prerequisite

This project require some essential tools to run on your local machine:
- [NodeJS](https://nodejs.org/en/) (we use v14 to develop) and npm (NodeJS package manager)
- [MongoDB](https://www.mongodb.com/)


**Some instruction for installing MongoDB**

For Windows:

- You need to install MongoDB and MongoDB database tools. You can find more information in the link below.

  [[MongoDB installation on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)]

  [[MongoDB Database tools on Windows](https://docs.mongodb.com/database-tools/installation/installation-windows/)]

For Linux:

- Just need to follow the instructions in the [documentation page](https://docs.mongodb.com/manual/administration/install-on-linux/) for your Linux distro.

## Create testing data

No application can run without data, so the next step, make sure your current directory is /data/ directory, then copy and paste these below commands to create testing data.

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

## How to run this application?

- Clone this repository:
``` bash
git clone https://github.com/MinhCao031/Web3306_22.git
```
- Start front-end and back-end dev server:
``` bash
npm install
npm start
npm run server
```

And you are ready to go!

By default, frontend server runs on http://locahost:3000 and backend server runs on http://localhost:5000.
Enjoy!
