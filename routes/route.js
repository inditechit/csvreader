const express = require("express");
const router = express.Router();
const csvToJson = require("../resources/index")

router.get("/csvToJson", csvToJson);

module.exports = router;
