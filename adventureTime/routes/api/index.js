const router = require("express").Router();
const adventureRoutes = require("./adventures");

// adventure routes
router.use("/adventures", adventureRoutes);

module.exports = router;
