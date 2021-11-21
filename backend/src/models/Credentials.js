/**
 * this model specifies the format to exchange credentials with the frontend
 * @param {string} username
 * @param {string} password
 */
/*class Credentials{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}*/
const mongoose =require("mongoose");
const Schema = mongoose.Schema;


// Create Our Schema
const CredentialsSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
});
const Credentials= mongoose.model('credentials',CredentialsSchema);
module.exports = Credentials;