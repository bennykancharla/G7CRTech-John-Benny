

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }


    getAllUsers(){
        return this.userRepository.getAllUsers()
    }

    getUserById(id){
        return this.userRepository.getUserById(id);
    }
    
    getUserBookshelf(id){
        return this.userRepository.getUserBookshelf(id);
    }

    addNewUser(userObject){
        return this.userRepository.addNewUser(userObject);
    }

    deleteUserById(id){
        return this.userRepository.deleteUserById(id);
    }

    updateUserById(id,userObject){
        return this.userRepository.updateUserById(id,userObject);
    }

    addBookToShelf(id,bookObject){
        return this.userRepository.addBookToShelf(id,bookObject);
    }

    updateToken(userId,token){
        return this.userRepository.updateToken(userId,token);
    }

}



module.exports = UserService;