const express = require("express");
const router = express.Router();

//Import controllers
const controllerSpell = require("../controllers/spell");
const controllerUser = require("../controllers/user");
const controllPerso = require("../controllers/perso")
const controllItems = require("../controllers/items")


// Get Router
router.route("/GetSpell").get(controllerSpell.getAllSpell);
router.route("/GetUser").get(controllerUser.getAllUser);
router.route("/GetPerso").get(controllPerso.getAllPerso);
router.route("/GetItems").get(controllItems.getAllItems);
router.route("/GetUniquePerso").get(controllPerso.getUniquePerso);

//Post Router
router.route("/PostPerso").post(controllPerso.createPerso);
router.route("/PostSpell").post(controllerSpell.createSpell);
router.route("/PostUser").post(controllerUser.createUser);
router.route("/PostItems").post(controllItems.createItems);


//Delete Router
router.route("/DeletePerso").delete(controllPerso.deletePerso);
router.route("/DeleteItems/:id").delete(controllItems.deleteItems);
router.route("/DeleteUser/:id").delete(controllerUser.deleteUser);
module.exports = router;

