const express = require('express')
const routes = express.Router()
const bcrypt = require('bcrypt')
const Users = require('../Model/model')

const {validateSignUp , validateLogin} = require('../validate')

//routess
routes.post('/signUp', async (req, res) => {
    const { error } = validateSignUp(req.body)
    if (error) return res.send(error.details[0].message)
   const Emailexists = await Users.findOne({
        email:req.body.email
    })
    if (Emailexists) return res.send('email exists')
        const salt = await bcrypt.genSalt(10)
        const hashedPassowrd = await bcrypt.hash(req.body.password , salt)
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassowrd
        })

        try {
            const saveUser = await newUser.save()
            res.send(saveUser)
        
        }
        catch (err) {
            res.send(err)
        }
    
    

})
routes.post('/login', async (req, res) => {
    const { error } = validateLogin(req.body)
    if (error) return res.send(error.details[0].message)
    else {
        const EmailFound = await Users.findOne(
            {
                email: req.body.email
            }
        )
        if (!EmailFound) res.send('Email doesnot exist')
        else {
            //compare passwords
            const compare = await bcrypt.compare(req.body.password, EmailFound.password)

            if (!compare) res.send('Wrong password provided')
            else
                res.send('logged in successfully')
        }
    }

})


module.exports = routes