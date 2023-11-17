const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerAuth,
    } = require('./user.controller');
const authorize = require('../auth/authorize');
const {IsCustomer, IsAdmin} = require('../auth/role');

// routes
router.get('/', authorize, IsAdmin, controllerGetAll); //admin only
router.get('/:id', authorize, IsAdmin, controllerGetId); //admin only
router.post('/', authorize, controllerAdd); // all authenticated users
router.put('/', authorize, IsAdmin, controllerEdit); //admin only
router.delete('/', authorize, IsAdmin, controllerDelete); //admin only
router.post('/auth', controllerAuth); //public route
module.exports = router;