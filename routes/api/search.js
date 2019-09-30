const router = require("express").Router();
const searchController = require("../../controllers/scrapeController");

router.route("/")
    .get(searchController.scrape);

module.exports = router;