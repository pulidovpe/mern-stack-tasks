const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(URI)
   .then(db => console.log(`DB is connected`))
   .catch(err => console.error(err.stack));

module.exports = mongoose;