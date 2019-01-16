const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

// Matches with "/api/sessions"
router.route("/")
  .get(sessionController.findAll)
  .post(sessionController.create);

// Matches with "/api/sessions/:id"
router
  .route("/:id")
  .get(sessionController.findById)
  .put(sessionController.update)
  .delete(sessionController.remove);

module.exports = router;
