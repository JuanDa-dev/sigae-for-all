import LoginPage from "./views/loginPage";
import RegisterPage from "./views/RegisterPage"
import GestionPage from "./views/gestionPage";
import FormPage from "./views/formPage";
import CreateEventPage from './views/createEventPage.js';
import PageNotFound from "./views/pageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './components/authProvider';
import { useContext } from 'react'

export default function App() {
    const { auth } = useContext(AuthContext)
    
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={auth ? <Navigate replace to="/login" /> : <LoginPage />} />
                <Route path="/Register" element={auth ? <Navigate replace to="/login" /> : <RegisterPage />} />
                <Route path="/" element={auth ? <GestionPage /> : <Navigate replace to="/login" />} />
                <Route path="/form/:form_id" element={<FormPage />} />
                <Route path="*" exact element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}