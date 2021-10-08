const express = require("express");
const router = express.Router();

router.use(require("./user.route"));
router.use(require("./profile.route"));
router.use(require("./followprofile.route"));
router.use(require("./group.route"));
router.use(require("./groupmember.route"));
router.use(require("./post.route"));
router.use(require("./comment.route"));


module.exports = router;