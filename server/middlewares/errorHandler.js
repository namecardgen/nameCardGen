module.exports = function(err,req,res,next){
    console.log('masuk error handler');
    console.log('=======',err.message)
    const status = err.code || 500
    const message = err.message || 'internal server error'
    res.status(status).json({
        msg : message
    })
}