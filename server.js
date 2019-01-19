const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// var router = express.Router();
// const multer = require('multer');
// const upload = multer({ storage: storage });
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gripapp",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

// Sets up where to store POST images
// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//       cb(null, 'uploads/')
//   }
// });

// router.route('/img_data')
// .post(upload.single('file'), function(req, res) {
//   var new_img = new Img;
//   new_img.img.data = fs.readFileSync(req.file.path)
//   new_img.img.contentType = 'image/jpeg';
//   new_img.save();
//   res.json({ message: 'New image added to the db!' });
// })
