var balle = require("./balle")
var raquette = require("./raquette")
var score = require("./score")
var partie = require("./partie")
var scoreboard = require("./scoreboard")

var express = require('express');
var router = express.Router();

/*********BALLE*********/
router.route('/balle').get(balle.getBallePos);

/*********RAQUETTE*********/
router.route('/raquette/:idJoueur').get(raquette.getRaquettePos);
router.route('/raquette/:idJoueur/:pos').post(raquette.postRaquettePos);

/*********SCORE*********/
router.route('/score/:idJoueur').get(score.getScore);

/*********PARTIE*********/
router.route('/etat').get(partie.getEtatPartie);
router.route('/endgame/:score_j1/:score_j2').get(partie.endGame);
router.route('/newgame/:idGame').get(partie.createNewGame);

/*********SCOREBOARD*********/
router.route('/scoreBoard/:idJoueur').get(scoreboard.getScorePlayer);
router.route('/leaderBoard').get(scoreboard.getLeaderBoard);

module.exports = router;