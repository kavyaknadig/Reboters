const express = require("express");
const router = express.Router();
const control = require("../Controller/controller");

//create(post), read(get), update(get), delete(delete)

//get all users
router.get('/getUsers',control.getUsers);

router.post('/postUser',control.postUsers);

router.get('/getuserbyID/:id',control.getByid);

router.delete('/deleteUser/:id',control.deleteUsers);

module.exports = router;