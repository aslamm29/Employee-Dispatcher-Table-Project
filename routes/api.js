var express = require('express')
var router = express.Router()
var DispatcherController = require('../controllers/DispatcherController')

router.get('/:resource', function(req, res, next){

    var resource = req.params.resource

    DispatcherController.find(req.query, function(err, results){
        if(err){
        res.json({
        confirmation: 'Failed',
        message: err
    })
    return
    }
    res.json({
        confirmation: 'Success',
        results: results
    })
    })
})

router.get('/:resource/:id', function(req, res, next){
    DispatcherController.findById(id, function(err, result){
        if(err){
            res.json({
                confirmation: 'Failed',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'Success',
            result: result
        })
    })
})

router.post('/:resource', function(req, res, next){
    DispatcherController.create(req.body, function(err, result){
        if(err){
        res.json({
            confirmation: 'Failed',
            message: err
        })
        return
        }
        res.json({
            confirmation: 'Success',
            result: result
        })
    })
})

module.exports = router