var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||  'mongodb://test:test321@ds255329.mlab.com:55329/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
