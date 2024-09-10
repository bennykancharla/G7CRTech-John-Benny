let {executor} = require("../../connection");

let url = 'mongodb://localhost:27017';
let NotFoundException = require("../../utils/not-found")



class UserRepository{
    constructor(){
        this.userExecutor = executor(url,"Erwin'sDatabase","users");
        
    }

    
    returnUserResult(userList,userId){
        if(userList.length !== 0){
            return userList;
        }
        else{
           throw new NotFoundException( "User Not Found",{userId});
        }
    }

    async getAllUsers(){
        return await this.userExecutor(async users => {
           return await users.find({}).toArray()
        });
    }

    async getUserById(userId){
        let user =  await this.userExecutor(async users =>{
            return await users.find({id:userId}).toArray();
        });
        // if(user.length !==0){
        //     // console.log(user)
        //     return user;
        // }
        // else{
        //     throw new NotFoundException( "User Not Found",{userId});
        // }
        
        return this.returnUserResult(user,userId);
    }

    async getUserBookshelf(userId){
        let user = await this.userExecutor(async users => {
            return await users.aggregate([
                {
                    $match:{
                        id:userId
                    }
                },
                {
                    $project: {
                        _id:0,
                        id:1,
                        bookshelf:1
                    }
                }
            ]).toArray()
        });

       return this.returnUserResult(user,userId);
     
    }


    async addNewUser(userObject){
        try{
        var result = await this.userExecutor(async users => {
            return await users.insertOne(userObject)
        });
        return result;
    }catch(e){
        return e.message;
    }
    }

    async deleteUserById(userId){
        let result = await this.userExecutor(async users => {
            return await users.deleteOne({id:userId});
        });
        if(result.deletedCount === 0){
            throw new NotFoundException( "User Not Found",{userId});
        }
        return result
    }

    async updateUserById(userId,userObject){
        let result =  await this.userExecutor(async users => {
            return await users.updateOne({id:userId},{$set:userObject});
        });

        if(result.matchedCount === 0){
            throw new NotFoundException( "User Not Found",{userId});
        }
        return result;
    }

    async addBookToShelf(userId,bookshelfObject){
        let result = await this.userExecutor(async users =>{
            return await users.updateOne(
                {
                        id:userId 
                },
                {
                    $push: {
                       [ `bookshelf.${bookshelfObject.bookshelfStatus}`]:bookshelfObject
                    }
                }
            )
        });
        if(result.matchedCount === 0){
            throw new NotFoundException( "User Not Found",{userId});
        }
        return result;
    }

    async updateToken({userId,token}){
    
            var result = await this.userExecutor(async users => {
                return await users.updateOne({
                    id:userId
                },
                {
                    $set:{
                       "login_token":token
                    }
                }
            )});

            if(result.matchedCount === 0){
                throw new NotFoundException( "User Not Found",{userId});

            }

            return result;
      

    }

}


module.exports = new UserRepository();






