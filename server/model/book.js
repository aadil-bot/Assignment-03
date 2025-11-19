let mongoose = require('mongoose')

// create a model class
let bookModel = mongoose.Schema({
    name:String,
    author: String,
    published:Number,
    description: String,
    price:Number
},
{
    collection:"Assignments"
}
);

module.exports = mongoose.model('Book',bookModel);