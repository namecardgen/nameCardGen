const Card = require('../models/card')

class CardController{
    
    static getAll(req,res,next){
        Card
        .find({userId : req.loggedUser.id})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(next)
    }
    
    static getOne(req,res,next){
        Card
        .findById(req.params.cardId)
        .then(card =>{
            res.status(200).json(card)
        })
        .catch(next)
    }

    static create(req,res,next){
        let newCard = new Card({
            title : req.body.title,
            image : req.file.cloudStoragePublicUrl,
            created_at : new Date(),
            userId : req.loggedUser.id  
        })
        newCard.save()
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(next)
    }

    static delete(req,res,next){
        Card
        .findByIdAndDelete(req.params.cardId)
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(next)
    }

}

module.exports = CardController