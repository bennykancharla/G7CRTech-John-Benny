import React from 'react';
import { User } from '../services/user';
import { InMemoryUserService } from '../services/in-memory-user.service';



const userContext = React.createContext<any>(null);

export const useUserContext = () => React.useContext(userContext);

const userService = new InMemoryUserService();

const userReducer = (user: User, action: any) => {

    console.log('action', action);
    switch (action.type) {
        case 'LOGIN':
            return { ...action.payload };
        case 'LOGOUT':
            return null;
        case 'ERROR':
            return action.payload;
        default:
            return user;
    }

}

//action creator
const loginUser =  (dispatch : any) => {
    
    return async (loginInfo: any) => {
        var user = await userService.login(loginInfo.email, loginInfo.password);
        if (user){
            dispatch({ type: "LOGIN", payload: user })
            return  "Success";
        }
        else{
             dispatch({ type: "ERROR", payload: "Invalid Credentials" });
             return null;
        }
        }
}


//1. call an action creator
//2. wait for it to finish
//3. dispath the value returned. 




export const UserProvider = ({ children }: any) => {

    const [user, dispatch] = React.useReducer(userReducer, null);





    const contextData = { user, dispatch, userService,loginUser: loginUser(dispatch) };

    return <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>

}

