const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:email")
  .get(usersController.findOne)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;