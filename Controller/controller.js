const express = require("express")
const userModel= ("../Models/userModel");

const app = express();

 exports.getUsers = (req, res) => {
    const users = userModel.find()
    .then( users => {
        res.jason(users)
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('Error retrieving data');
    });
 }

exports.getByid = (req, res) => {
    userModel.findById(req.params.id)
    .then(user => {
        if(!user){
            return res.status(404).send("user not found");
        }
        res.jason(user);
    })
    .catch(erorr => {
        console.error(error);
        res.status(500).send('Error retrieving data');
    });
}

exports.postUsers = (req, res) => {
    const user = new userModel(req.body);
    user.save()
    .then( () => {
        res.status(201).send("user created sucessfully")
    })
    .catch(erorr => {
        console.error(error);
        res.status(500).send('Error retrieving data');
    });
}

exports.deleteUsers = (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
    .then(user => {
        if(!user){
            return res.status(404).send("user not found");
        }
        res.status(200).send("user deleted sucessfully")
    })
    .catch(erorr => {
        console.error(error);
        res.status(500).send('Error posting data');
    });
}



