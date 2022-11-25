import { postRequest } from '../components/requests'
import AuthContext  from '../components/authProvider'
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react'
import '../css/login.css'

export default function LoginPage() {
    const navigate = useNavigate()
    const { setAuth } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const sendData = async (e) => {
        e.preventDefault()
        const response = await postRequest({ 
            name: 'login',
            payload: {
                name: username,
                password: password
            }
        })
        if (typeof response === 'string') {
            console.log(response)
        } else {
            setAuth(response);
            localStorage.setItem('user', response)
            navigate('/form');
        }
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={sendData} >
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" onChange={e => {
                                setUsername(e.target.value)
                            }} placeholder="Nombre de usuario" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" onChange={e => {
                                setPassword(e.target.value)
                            }} placeholder="Contraseña" />
                        </div>
                        <button type="submit" className="button login__submit">
                            <span className="button__text">Ingresa</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>  
    )
}