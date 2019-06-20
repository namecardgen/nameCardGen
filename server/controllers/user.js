const User = require('../models/user')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')


class userController{
    static getAll(req,res,next){
            User.find({})
            .then(value =>{
                res.status(200).json(value)
            })
            .catch(next)
        }

    static getOne(req,res,next){
        User
        .findById(req.params.userId)
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(next)
    }

    static update(req,res,next){
        console.log(req.body);
        
        let setVal = {}
        req.body.firstName && (setVal.firstName = req.body.firstName) 
        req.body.lastName && (setVal.lastName = req.body.lastName)
        req.body.email && (setVal.email = req.body.email)
        
        User
        .findById(req.params.userId)
        .then(user =>{
            user.set(setVal)
            return user.save()
        })
        .then(updated =>{
            res.status(200).json(updated)
        })
        .catch(next)
    }

    static register(req,res,next){
        console.log('masuk user controller register',req.body);
        
            let user = new User({
                firstName : req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })
            user.save()
            .then(value =>[
                res.status(201).json(value)
            ])
            .catch(next)
        }
    
    static login(req,res,next){
        console.log('masuk login',req.body);
        
        User.findOne({email : req.body.email})
        .then(user =>{
            if(user){
                console.log('masuk ada email');
                
                let check = compare(req.body.password, user.password)
                if(check){
                    let payload = {
                        id : user._id,
                        email : user.email
                    }
                    let token = sign(payload, `${process.env.SECRET_KEY}`)
                    res.status(200).json({
                        msg : 'logged in',
                        token,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        id : user._id,
                        articleList : user.articleList
                    })
                }else{
                    console.log('error 1');
                    
                    throw ({msg : 'wrong password / email', code : 404})
                }
            }else{
                console.log('error 2');
                
                throw ({msg : 'wrong password / email', code : 404})
            }
        })
        .catch(next)
        }
        
        static delete(req,res,next){
            User
            .findByIdAndDelete(req.params.userId)
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(next)
        }
    }

module.exports = userController

