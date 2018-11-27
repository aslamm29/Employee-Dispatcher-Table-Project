var mongoose = require('mongoose')

var DispatcherSchema = new mongoose.Schema({

    date: {type:Date, default:Date.now},
    project: {type:String, default:''},
    total: {type:String, default:''},
    close: {type:String, default:''},
    super: {type:String, default:''}

})

module.exports = mongoose.model('DispatcherSchema', DispatcherSchema)