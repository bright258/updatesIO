# UPDATES.IO

Updates.io is a web application designed to facilitate communication between creators and their paid community. It allows creators to share short, important updates in the form of written text.

## Built With

- Frontend: ReactJs
- Backend: NestJs

## TODOS

- User authentication: Sign up and sign in pages
- User information storage: A database for storing user information

## User Schema

- id: string
- name: string
- email: string
- age: number
- password: string
- isAcreator: boolean
- hasPaidPremiumForCurrentMonth: boolean
- numberOfUpdates: number
- sumOfLikes: number
- nameOfCorner: string

===========================================================

### Testing: 

## FOR BACKEND

create  Create --- POST  localhost:4000/user/post
user:
{
   "firstName":"Emeka",
   "lastName":"Uche",
   "email": "emekso@gmail.com",
   "userName":"emeksi",
   "password":"HL&5g#kS)e25h&e",
   "country":"Nigeria"
      
    }

=======
Login --- POST  localhost:4000/auth

auth:{
   "username":"emeksi",
   "password":"HL&5g#kS)e25h&e"

}

=======
Create --- POST  localhost:4000/corner
corner:

{

   "name": "string",

  "description": "strinmfjfjlnflnfikning",

  "numberOfTokensNeededToJoin": 122,

  "ownerId": "32419388-c2f0-464f-9125-3da45b352855",

  "profilePictureUrl": "string",

  "category": "crypto"
      
    }



## For Frontend:

localhost:3000 - Sign Up
localhost:3000/login - Log In
