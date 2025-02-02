const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//npm i passport
//npm i passport-local
//npm i passport-local-mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose); //it automatically implement username, hashing, sorting, hashpassword 

module.exports = mongoose.model("User", userSchema);