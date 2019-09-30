const router = require("express").Router();
const articleRoute = require("./article");
const searchRoute = require("./search");

router.use("/article", articleRoute);
router.use("/search", searchRoute);

module.exports = router;