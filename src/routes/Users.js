import express from 'express'
import bcrypt from 'bcryptjs'

const users = express.Router()
import cors from 'cors'
import jwt from 'jsonwebtoken'
import User from '../models/User'

users.use(cors())
process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  console.log('userData', userData)

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log(user)
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({status: user.email + ' registered!'})
            })
            .catch(err => {
              res.send('error:' + err)
            })
        })
      } else {
        res.json({error: 'User already exists'})
      }
    })
    .catch(err => {
      res.send('error:' + err)
    })

})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(user => {
    console.log('response')
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      } else {
        res.json({error: 'User does not exist'})
      }
    } else {
      res.json({error: 'User does not exist'})
    }
  }).catch(err => {
    res.send('error:' + err)
  })
})

users.get('/profile', (req, res) => {
  let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  User.findOne({
    _id: decoded._id
  }).then(user => {
    if (user) {
      res.json(user)
    } else {
      res.send('error' + err)
    }
  })
})
export default users