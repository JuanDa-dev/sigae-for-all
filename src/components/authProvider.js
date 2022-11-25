import { createContext, useState, useEffect } from "react";
import { postRequest } from "./requests";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('user'));

    const getUser = async (user) => {
        if (user) {
            const data = await postRequest('verify/token')
            setAuth(typeof data === 'string' ? undefined : data)
        }
    }

    useEffect(() => {
        getUser(auth)
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;