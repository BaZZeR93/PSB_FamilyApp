const bodyParser = require('body-parser');
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();

//Load Database
const firebase = require('./db/firebasedb')

var database = firebase.database()

//Load modules for db
const expenses = require('./db/models/expens.model')
const users = require('./db/models/users.model')

//Load middleware
app.use(bodyParser.json())

//headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ROUTES HANDLER

/**
 * GET /wall
 * Scope: retrive a summary of the user profile
 * name, role, activities(or maybe a different get), budget
 */
app.get('/wall', (req,res) =>{
    
})

/**
 * GET /budget
 * Scope: retrive an array of expenses + budget
 */
app.get('/budget', (req,res) =>{
    
})

/**
 * GET /expenses
 * Scope: retrive an array of expenses
 */
app.get('/expenses', (req,res) =>{
    try {
        database.ref("expenses/").once('value', function(data) {
            //console.log(data.val())
            if(data.val() != null) {
                var objects = data.val()
                var keys = Object.keys(objects)
                //console.log(keys)
                var exp = new Array(keys.length)
                for(var i = 0; i < keys.length; i++) {
                    exp[i] = objects[keys[i]]
                }
            }
            res.send(exp)
        });
        //res.sendStatus(200)
    } catch {
        res.sendStatus(400)
    }
})
/**
 * POST /expenses
 * Scope: create a new expens and return the new list to the user
 */
app.post('/expenses', (req,res) =>{
    try {
        console.log(req.body.name)
        id = Date.now().toString()
        exp = expenses(id, req.body.name, req.body.value)
        database.ref("/expenses/"+id).update(exp)
        
        res.sendStatus(200)
    } catch(err) {
        res.sendStatus(400)
        console.log("Write to DB error")
        //console.log(err)
    }

})

/**
 * POST /users
 * Scope: create a new user and return the new list to the user
 */
app.post('/users', async (req,res) =>{
    try {
        console.log(req.body.name)
        const hashedPass = await bcrypt.hash(req.body.pass, 10)
        id = Date.now().toString()
        exp = users(id, req.body.name, req.body.email, hashedPass)
        database.ref("/users/"+id).update(exp)
        
        res.sendStatus(200)
    } catch(err) {
        res.sendStatus(400)
        console.log("Write to DB error")
        //console.log(err)
    }
})

/**
 * POST /authUser
 * Scope: auth user and return the status
 */
app.post('/authUser', async (req,res) =>{
    try {
        console.log(req.body.email)
        const hashedPass = await bcrypt.hash(req.body.pass, 10)
        console.log(hashedPass)

        database.ref("users/").orderByChild("email").equalTo(req.body.email).once('value', function(data) {
            if(data.val() != null){
            
                database.ref("users/").orderByChild("pass").equalTo(hashedPass).once('value', function(data2) {
                    if(data2.val()!= null) {
                        res.send(data2.val())
                    }
                    else
                    {
                        res.sendStatus(400)
                    }
                });
            }
            else
            {
                res.sendStatus(400)
            }
        });
    } catch(err) {
        res.sendStatus(400)
        console.log("log in failed")
        //console.log(err)
    }
})




app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})