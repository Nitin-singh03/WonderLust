const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js")
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")

router.post("/", validateReview, wrapAsync(reviewController.createReview))


router.delete("/:reviewId", wrapAsync(reviewController.destroyReview))

module.exports = router;