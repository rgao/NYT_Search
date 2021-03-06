const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    .get(articleController.findAll)
    .post(articleController.save);

router.route("/:id")
    .get(articleController.findOne)
    .put(articleController.update)
    .delete(articleController.remove);

module.exports = router;