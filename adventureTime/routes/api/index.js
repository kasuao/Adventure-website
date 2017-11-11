const router = require("express").Router();
const adventureRoutes = require("./adventures");
const usersRoutes = require("./users");

// adventure routes
router.use("/adventures", adventureRoutes);
// users routes
router.use("/users", usersRoutes);

module.exports = router;
