const path = require("path");
const router = require("express").Router();
const clientRoutes = require("./clients");
const trainerRoutes = require("./trainers");
const workoutRoutes = require("./workouts");
const sessionRoutes = require("./sessions");

// Client routes
router.use("/clients", clientRoutes);

// Trainer routes
router.use("/trainers", trainerRoutes);

// Workout routes
router.use("/workouts", workoutRoutes);

// Session Routes
router.use("/sessions", sessionRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
