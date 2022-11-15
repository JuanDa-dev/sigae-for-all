import LoginPage from "./views/loginPage";
import GestionPage from "./views/gestionPage";
import NewEventPage from "./views/newEventPage";
import FormPage from "./views/formPage";
import PageNotFound from "./views/pageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './components/authProvider';
import { useContext } from 'react'

export default function App() {
    const { auth } = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" exact element={<PageNotFound />} />
                <Route path="/gestionPage" element={auth ? <GestionPage /> : <Navigate replace to="/login" />} />
                <Route path="/newEvent" element={auth ? <NewEventPage /> : <Navigate replace to="/login" />} />
                <Route path="/form" element={auth ? <FormPage /> : <Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}