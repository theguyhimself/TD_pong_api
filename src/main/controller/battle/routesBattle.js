var balle = require("./balle")
var raquette = require("./raquette")
var score = require("./score")
var partie = require("./partie")

var express = require('express');
var router = express.Router();

/*********BALLE*********/
router.route('/balle').get(balle.getRaquettePos);

/*********RAQUETTE*********/
router.route('/raquette/:idJoueur').get(raquette.getRaquettePos);
router.route('/raquette/:idJoueur/:pos').post(raquette.postRaquettePos);

/*********SCORE*********/
router.route('/score/:idJoueur').get(score.getScore);

/*********PARTIE*********/
router.route('/etat').get(partie.getEtatPartie);
router.route('/newgame').get(partie.createNewGame);

module.exports = router;