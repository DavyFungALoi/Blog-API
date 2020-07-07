const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

//Posts

router.get('/', postController.getPosts)

router.get('/:id', postController.getSinglePost)

router.post('/post', postController.postPosts)

router.put('/:id', postController.putPosts)

router.delete('/:id', postController.deletePosts)


//Comments

router.get('/comment', commentController.getComments)

router.post('/comment', commentController.postComments)

router.put('/comment/:id', commentController.putComments)

router.delete('/comment/:id', commentController.deleteComments)




//User


router.get('/user', userController.getUsers)

router.post('/user', userController.postUsers)

router.put('/user/:id', userController.putUsers)

router.delete('/user/:id', userController.deleteUsers)


module.exports = router;