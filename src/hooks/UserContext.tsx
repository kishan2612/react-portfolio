import {createContext, useContext} from "react";
import {User} from "../model/User.ts";

const  UserContext = createContext<User|null>(null);

export const useUser=()=>{
    const  context = useContext(UserContext);
    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export default UserContext;