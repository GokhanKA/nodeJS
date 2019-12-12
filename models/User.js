const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        unique: true,
        type: String,
        required: true

    },
    password: {
        type: String,
        minlength: 5,
    }
});

module.exports = mongoose.model('user', UserSchema);