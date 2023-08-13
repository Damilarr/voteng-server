var express = require("express");
const router = express.Router();
const {
  addToDetails,
  getDetails,
  deleteDetail,
} = require("../Controller/details.js");
router.post("/add", addToDetails);
router.get("/get", getDetails);
router.put("/del", deleteDetail);

module.exports = router;
