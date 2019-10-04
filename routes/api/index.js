const router = require("express").Router();
const articleRoute = require("./article");
const searchRoute = require("./search");

router.use("/search", searchRoute);
router.use("/article", articleRoute);

module.exports = router;