import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        if(localStorage.getItem("user")){
            return localStorage.getItem("user")
        } else {
            return null;
        }
    });

    const logOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    }

    return <UserContext.Provider value={{user, setUser, logOut}} >
        {children}
    </UserContext.Provider>

}