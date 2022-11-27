import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const user = localStorage.getItem('user')
    const [auth, setAuth] = useState(typeof user === 'string' ? null : user);
    
    useEffect(() => {
        setAuth(auth)
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;