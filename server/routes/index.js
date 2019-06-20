const router = require('express').Router()
const authenticate = require('../middlewares/authenticate')
const CardController = require('../controllers/card')
const UserController = require('../controllers/user')

// router.get('/users',UserController.getAll)
// router.get('/users/:id',UserController.getOne)
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.patch('/users',UserController.update)
router.delete('/users/:id',UserController.delete)

router.use(authenticate)

router.get('/cards', CardController.getAll)
router.get('/cards/:cardId',CardController.getOne)
router.post('/cards', CardController.create)
router.delete('/cards/:cardId', CardController.delete)

module.exports = router