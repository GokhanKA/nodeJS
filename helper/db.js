const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:123456a@ds353338.mlab.com:53338/heroku_551h25td', { useMongoClient: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connnected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

};