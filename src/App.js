import LoginPage from "./views/loginPage";
import RegisterPage from "./views/RegisterPage"
import GestionPage from "./views/gestionPage";
import FormPage from "./views/formPage";
import PageNotFound from "./views/pageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './components/authProvider';
import { useContext } from 'react'

export default function App() {
    const auth = "user"
    //const { auth } = useContext(AuthContext)
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/" element={auth ? <GestionPage /> : <Navigate replace to="/login" />} />
                <Route path="/form" element={auth ? <FormPage /> : <Navigate replace to="/login" />} />
                <Route path="*" exact element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}