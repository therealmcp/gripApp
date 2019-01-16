const router = require("express").Router();
const trainerController = require("../../controllers/trainerController");

// Matches with "/api/trainers"
router.route("/")
  .get(trainerController.findAll)
  .post(trainerController.create);

// Matches with "/api/trainers/:id"
router
  .route("/:id")
  .get(trainerController.findById)
  .put(trainerController.update)
  .delete(trainerController.remove);

module.exports = router;
