[![Build Status](https://travis-ci.com/Kmozart/Project-Uno.svg?branch=develop)](https://travis-ci.com/Kmozart/Project-Uno) [![Coverage Status](https://coveralls.io/repos/github/Kmozart/Project-Uno/badge.svg)](https://coveralls.io/github/Kmozart/Project-Uno)  




**Project Overview**
This is a real estate project featuring the creation of a UI and its equivalent API with the various specifications it they require. Below is a detailed summary.

**Getting Started**
Clone the project to your computer using this command

```git clone:```
```git@github.com:Kmozart/Project-Uno.git)```

Prerequisites
Make sure you have node js and postman installed on your computer.

Ensure to have the following prerequisites: 
- A code editor like VsCode

- ``node .js`` and ``express`` installed

- `` Postman``

*Then ensure to have... *

- Dependencies and development dependencies installed with the following commands in your terminal.
``npm install``

``--save -dev (name of a dependency)``

``npm install -D(name for devdependency)``

- Setting up nodemon for automatic re-running this application
nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

``npm install --save-dev nodemon``

- Ensure to include this in the your package.json file under scripts

```dev-start:nodemon server.js```

Running the project
To run this project

$git clone and cd in to project  and run the command below

``npm run start``

*Features*
- Create User account

- Login a user

- Create property advert

- Update property details

- Mark property as sold

- Delete property advert

- View all property adverts

- View a specific property advert




                    **API Endpoints**    
| **Methods**|      **Endpoints**        |         ***Functionality***    |
|------------|---------------------------|--------------------------------|
| **POST**   |  ``api/v1/auth/signup``   | Creates a user account         |
| **GET**    |  ``api/v1/auth/signin``   | Gets a user account            |
| **POST**   |   ``api/v1/property``     | Create a property ad.          |
| **PATCH**  |   ``/api/v1/property/1``  | Update property details        |
| **GET**    |   ``api/v1/property``     | Gets all property.             |
| **PATCH**  |``/api/v1/property/1/sold``| Marks a property sold          |
| **DELETE** |   ``api/v1/property/1``   | Deletes a property             |
| **GET**    |   ``api/v1/property/1``   | View a specific property advert|



**How to run tests**
      Run this command

``npm run tests``


**GitHub gh-pages**

```https://kmozart.github.io/Project-Uno/```

**Apiary Docs**

```https://apidatabase.docs.apiary.io/#introduction/description-of-usual-server-responses:```


live demo of this project(UI)
```https://Kmozart.github.io/Project-Uno/```

```https://project-uno-prolite.herokuapp.com```

**Author**
Kennedy Simiyu

**Licencing**
The app is opensource hence free to all users

© 2019 GitHub, Inc.
