// Purpose:
// Defines what a User is.

// Responsibilities:

// User fields (name, email, password, username)

// Data rules (unique email, unique username)

// Nothing else

// ❌ No request handling
// ❌ No hashing logic
// ❌ No JWT logic

// Model = shape of data only
// Think of this file as:

// 📦 The blueprint of how a user will be stored in your database
// You are telling MongoDB:

// “Whenever I save a user, this is exactly what fields it must have and how they should behave.”

import mongoose from "mongoose"; //improting mongoose cause we will be doing everything on mongo db 

 // creating a new schema for user
const userSchema = new mongoose.Schema({
 name : {
    type:String,
    required : true, //this tells that the certain fiend is mandatory to fill
    trim:true //this removes the extra space
 },
 username : {
    type:String,
    required : true,
    unique : true, //this tells that the username should be unique
    lowercase : true, //this converts the username to lowercase
    trim:true
 },
 email : {
    type:String,
    required : true,
    unique : true,
    lowercase : true,
    trim:true
 },
 password : { 
    type:String,
    required : true,
    trim:true,
    select : false //this will not return the password when we fetch the user details
    }
},

{timestamps : true} //this will create two fields createdAt and updatedAt automatically
);

const User = mongoose.model("User", userSchema); //creating a model named User using the userSchema

export default User; //exporting the model to use it in other files
