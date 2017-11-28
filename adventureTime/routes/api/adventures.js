const router = require("express").Router();
const adventuresController = require("../../controllers/adventuresController");

// Matches with "/api/adventures"
router.route("/")
  .get(adventuresController.findAll)
  .post(adventuresController.create);

// Matches with "/api/adventures/:id"
router
  .route("/:category")
  .get(adventuresController.findOne)
  .put(adventuresController.update)
  .delete(adventuresController.remove);

module.exports = router;
