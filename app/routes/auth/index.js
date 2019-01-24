const express = require('express')
const router = express.Router()
const User = require('../../db/models/User')
const passport = require('../../passport')

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get('/google/callback',
// 	passport.authenticate('google', {
// 		successRedirect: 'http://localhost:3000',
// 		failureRedirect: 'http://localhost:3000/login'
// 	}))

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.get('/user/:id', (req, res, next) => {
	console.log('===== user!!======')
	const id = req.params.id;
	User.findOne({
		'_id': id
	}, (err, userMatch) => {
		if (userMatch) {
			res.json(userMatch)
		} else {
			res.json({ "ERROR": "NO MATCH" })
		}
	})
})

router.post('/login',
	// passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		// console.log('REQ OBJECT', req)

		// const user = JSON.parse(JSON.stringify(req.user)) // hack
		// const cleanUser = Object.assign({}, user)
		// if (cleanUser.local) {
		// 	console.log(`Deleting ${cleanUser.local.password}`)
		// 	delete cleanUser.local.password
		// }
		// console.log(cleanUser)
		User.findOne({ 'local.email': req.body.email }, (err, userMatch) => {
			if (err) {
				console.log(err)
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!userMatch.checkPassword(req.body.password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			console.log(`Deleting ${userMatch.local.password}`)
			delete userMatch.local.password
			// return done(null, userMatch)
			res.json({ user: userMatch })
		})


	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { email, password, firstName, lastName, photo } = req.body
	console.log("REQ.BODY: ", req.body)
	// ADD VALIDATION
	User.findOne({ 'local.email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newUser = new User({
			'local.email': email,
			'local.password': password,
			firstName,
			lastName,
			photo
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router
