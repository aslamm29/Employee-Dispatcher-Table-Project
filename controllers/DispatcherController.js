var Dispatcher = require('../models/Dispatcher')

module.exports = {

    find: function(params, callback){
    Dispatcher.find(params, function(err, dispatchers){
        if(err){
            callback(err, null)
            return
        }
        callback(null, dispatchers)
    })
    },

    findById: function(id, callback){
    Dispatcher.findById(id, function(err, dispatcher){
        if(err){
            callback(err, null)
            return
        }
        callback(null, dispatcher)
    })
    },
    
    create: function(params, callback){
    Dispatcher.create(params, function(err, dispatcher){
        if(err){
            callback(err, null)
            return
        }
        callback(null, dispatcher)
    })
    },

    update: function(id, params, callback){
    Dispatcher.findByIdAndUpdate(id, params, {new:true}, function(err, dispatcher){
        if(err){
            callback(err, null)
            return
        }
        callback(null, dispatcher)
    })
    },

    delete: function(id, params){
    Dispatcher.findByIdAndRemove(id, function(err){
        if(err){
            callback(err, null)
            return
        }
        callback(null,null)
    })
    }
}