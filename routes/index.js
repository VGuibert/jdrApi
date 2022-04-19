const express = require("express");
const router = express.Router();

//Import controllers
const controllerSpell = require("../controllers/spell");
const controllerUser = require("../controllers/user");
const controllPerso = require("../controllers/perso")


// Get Router
router.route("/GetSpell").get(controllerSpell.getAllSpell);
router.route("/GetUser").get(controllerUser.getAllUser);
router.route("/GetPerso").get(controllPerso.getAllPerso);

//Post Router
router.route("/PostPerso").post(controllPerso.createPerso);
router.route("/PostSpell").post(controllerSpell.createSpell);
router.route("/PostUser").post(controllerUser.createUser);

//Delete Router
router.route("/DeletePerso/:id").delete(controllPerso.deletePerso);
router.route("/DeleteUser/:id").delete(controllerUser.deleteUser);
module.exports = router;

