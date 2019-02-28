const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//  Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//

// Todo.findOneAndRemove({_id: ''}).then((todo) => {

// });

Todo.findByIdAndRemove('5c7791d4f8ed90afa12db678').then((todo) => {
    console.log(todo);
});