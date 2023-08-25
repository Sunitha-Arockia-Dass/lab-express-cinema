const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/movies", (req, res, next) => {
  Movie.find().then((moviesFromDB) => {
    //console.log(moviesFromDB)

    res.render("movies", { movies: moviesFromDB });
  });
});
router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId).then((moviesFromDB) => {
    console.log(moviesFromDB);

    res.render("singleMovie", { movie: moviesFromDB });
  });
});

module.exports = router;
