import { postRequest } from '../components/requests'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../css/register.css'

export default function RegisterPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const sendData = async (e) => {
        e.preventDefault()
        if(username.length > 0 && password.length > 0 && confirmPassword.length > 0) {
            if(password === confirmPassword) {
                const response = await postRequest({ 
                    name: 'register',
                    payload: {
                        name: username,
                        password: password
                    }
                })
                if (typeof response === 'string') {
                    console.log(response)
                } else {
                    navigate('/login');
                }
            }
        }
    }

    return (
        <div className='Login_Container'>
            <form onSubmit={sendData} className='Form_Login'>
                <div className='input_Container'>
                    <i className="login__icon fas fa-user"></i>
                    <input required type="text" onChange={e => {
                        setUsername(e.target.value)
                    }}  className='inputLogin' placeholder="Nombre de usuario" />
                </div>
                <div className='input_Container'>
                    <i className="login__icon fas fa-lock"></i>
                    <input required type="password" onChange={e => {
                        setPassword(e.target.value)
                    }} className='inputLogin'  placeholder="Contraseña" />
                </div>
                <div className='input_Container'>
                    <i className="login__icon fas fa-lock"></i>
                    <input required type="password" onChange={e => {
                        setConfirmPassword(e.target.value)
                    }} className='inputLogin'  placeholder="Ingresa otra vez tu contraseña" />
                </div>
                <button type="submit" className="button login__submit">
                    <span className="button__text">Registrate</span>
                    <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div className='Sign_Up'>
                    <div>
                        Ya tienes un Usuario?
                        <a href='www.cursos.uninorte.edu.co'>Ingresa aqui</a>
                    </div>
                </div>
            </form>
        </div>  
    )
}