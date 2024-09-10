
let UserRepository = require("../repositories/mongodb/userMongoRepo");
let UserService = require("../services/user-service");

let service = new UserService(UserRepository);

var tempUserObj = {"id": "erwin-smith",
    "username": "Erwin Smith",
    "password": "giveYourHearts"
}

var tempBookObj = {
    "bookId":"the-alchemist",
    "title":"The Alchemist",
    "author": "Paulo Coelho",
    "rating":4.6,
    "price":300,
    "bookshelfStatus":"wantToRead"
}



async function getAllUsers(){
    return await service.getAllUsers();
}

async function getUserById({params}) {
    return await service.getUserById(params.userId);
}

async function getUserBookshelf({params}) {
    return await service.getUserBookshelf(params.userId);
}

async function addNewUser({body}) {
    return await service.addNewUser(body);
}

async function deleteUserById({params}) {
    return await service.deleteUserById(params.userId);
}

async function updateUserById({params,body}) {
    return await service.updateUserById(params.userId,body);
}

async function addBookToShelf({params,body}) {
    return await service.addBookToShelf(params.userId,body);
}

async function updateToken({body}) {
    return await service.updateToken(body);
}


module.exports={
    getAllUsers,
    getUserById,
    getUserBookshelf,
    addNewUser,
    deleteUserById,
    updateUserById,
    addBookToShelf,
    updateToken
}
