const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/clients"
router.route("/")
  .get(clientController.findAll)
  .post(function(req, res){
    console.log(req.body)
    res.send("post");
  });
  
  

// Matches with "/api/clients/:id"
router
  .route("/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;
