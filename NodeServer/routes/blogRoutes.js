const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

//blog routes
router.get('/', blogController.blog_get);
router.post('/',blogController.blog_post);
router.get('/:id', blogController.blog_getOne);
router.put('/:id',blogController.blog_update)
router.delete('/:id',blogController.blog_delete)

module.exports = router;