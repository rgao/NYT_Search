const router = require("express").Router();
const articleRoute = require("./articles");
const searchRoute = require("./search");

router.use("/articles", articleRoute);
router.use("/search", searchRoute);

module.exports = router;