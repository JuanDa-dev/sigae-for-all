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
            navigate('/');
        }
    }

    return (
        <div className='Login_Container'>
            <form className='Form_Login' onSubmit={sendData}>
                <div className='input_Container'>
                    <i className="login__icon fas fa-user"></i>
                    <input type= "text" className='inputLogin' onChange={e => {
                                setUsername(e.target.value)
                            }} placeholder="Nombre de usuario" />
                </div>
                <div className='input_Container'>
                    <i className="login__icon fas fa-lock"></i>
                    <input type= "password" className='inputLogin' onChange={e => {
                                setPassword(e.target.value)
                            }} placeholder="Contraseña" />
                </div>
                <button type="submit" className="button login__submit">
                        <span className="button__text">Ingresa</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div className='Sign_Up'>
                    <div>
                        No tienes un Usuario?
                        <a href='www.cursos.uninorte.edu.co'>Registrate aqui</a>
                    </div>
                </div>
            </form>
        </div>  
    )
}