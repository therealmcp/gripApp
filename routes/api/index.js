const path = require("path");
const router = require("express").Router();
const clientRoutes = require("./clients");
const trainerRoutes = require("./trainer");
const workoutRoutes = require("./workout");
const sessionRoutes = require("./session");

// Client routes
router.use("/clients", clientRoutes);

// Trainer routes
router.use("/trainer", trainerRoutes);

// Workout routes
router.use("/workout", workoutRoutes);

// Session Routes
router.use("/session", sessionRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
