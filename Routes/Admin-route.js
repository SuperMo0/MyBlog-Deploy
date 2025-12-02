import { Router } from "express";
import express from 'express';
import * as auth from './../Controllers/auth.js'
import * as controller from './../Controllers/admin.js'
import * as validate from './../utils/validate.js'


let router = Router();

router.post('/login', express.json(), auth.authenticateAdmin);

router.use(auth.authorizeAccess);


router.get('/blogs', controller.handleGetAllBlogs);

router.get('/blogs/:id', validate.validateParamId, controller.handleGetBlog);

router.get('/blogs/:id/comments', validate.validateParamId, controller.handleGetBlogComments);

router.post('/blogs', express.json(), controller.handleNewBlog);

router.put('/blogs/:id', validate.validateParamId, express.json(), controller.handleUpdateBlog);

router.delete('/blogs/:id', validate.validateParamId, controller.handleDeleteBlog);


export default router