import { IContextType, IUser } from "@/types";
import { Children, createContext, useState } from "react";


export const INITIAL_USER= {
    id:'',
    name:'',
    username:'',
    email:'',
    imageUrl:'',
    bio:'',
};

const INITAIL_STATE = {
    user:INITIAL_USER,
    isLoading:false,
    isAuthenticated:false,
    setUser:()=>{},
    setIsAuthenticated:()=>{},
    checkAuthUser:async()=> false as boolean,
}

const AuthContext = createContext<IContextType>(INITAIL_STATE);

const AuthProvider = ({children}:{children:React.ReactNode})=>{

    const [user,setUser]=useState<IUser>(INITIAL_USER)
    const [isLoading,setIsLoading] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    const checkAuthUser= ()=>{
        
    }
const value  = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
}

return (
<AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
)

}
export default AuthProvider