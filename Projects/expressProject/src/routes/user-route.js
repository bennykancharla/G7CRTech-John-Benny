let express = require("express");

let userController = require("../controllers/user-controller");
let {httpHandler} = require("../utils/handler");
var users = express.Router()

users.route("/")
    .get(httpHandler(userController.getAllUsers))
    .post(httpHandler(userController.addNewUser))



users.route("/:userId")
    .get(httpHandler(userController.getUserById))
    .put(httpHandler(userController.updateUserById))
    .delete(httpHandler(userController.deleteUserById))



users.route("/:userId/bookshelf")
    .get(httpHandler(userController.getUserBookshelf))
    .post(httpHandler(userController.addBookToShelf))


users.route("/token")
    .post(httpHandler(userController.updateToken))

module.exports = users;