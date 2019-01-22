const express = require('express')
const router = express.Router()
const db = require('../../../db/models')

// router.get('/recipe/:id', (req, res, next) => {
// 	console.log('===== user!!======')
// 	const id = req.params.id;
// 	Client.findOne({
// 		'_id': id
// 	}, (err, clientMatch) => {
// 		if (clientMatch) {
// 			res.json(clientMatch)
// 		}else{
// 			res.json({"ERROR": "NO MATCH"})
// 		}
// 	})
// })

router.post('/client/:id', (req, res) => {
	// console.log("REQ.BODY: ", req.body)
	// console.log("USER ID", req.params.id)
	db.Client.create(req.body).then((client) => {

		return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { client: client._id } }, { new: true });
	})
		.then(function (dbUser) {
			// If we were able to successfully update an Article, send it back to the client
			console.log('USER OBJECT UPDATED')
			res.json(dbUser);
		})
		.catch(function (err) {
			console.log(err)
			// If an error occurred, send it to the client
			res.json(err);
		});

})

router.get("/client/:id", function (req, res) {
	// Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
	db.User.findOne({ _id: req.params.id })
		// ..and populate all of the notes associated with it
		.populate("client")
		.then(function (dbUser) {
			// If we were able to successfully find an Article with the given id, send it back to the client
			res.json(dbUser);
		})
		.catch(function (err) {
			// If an error occurred, send it to the client
			res.json(err);
		});
});

module.exports = router
