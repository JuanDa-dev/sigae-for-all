import { postRequest } from '../components/requests'
import AuthContext  from '../components/authProvider'
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react'
import '../css/register.css'

export default function LoginPage() {
    

    return (
        

        <div className='Login_Container'>

            <form className='Form_Login'>
                
                <div className='input_Container'>

                    <i className="login__icon fas fa-user"></i>
                    <input type= "text" className='inputLogin' placeholder="Nombre de usuario" />
                </div>
                <div className='input_Container'>

                    <i className="login__icon fas fa-lock"></i>
                    <input type= "password" className='inputLogin'  placeholder="Contraseña" />
                </div>
                <div className='input_Container'>

                    <i className="login__icon fas fa-lock"></i>
                    <input type= "password" className='inputLogin'  placeholder="Ingresa otra vez tu contraseña" />
                </div>
                <button type="submit" className="button login__submit">
                        <span className="button__text">Registrate</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div className='Sign_Up'>

                    <div>
                        Ya tienes un Usuario
                        <a href='www.cursos.uninorte.edu.co'> Ingresa aqui</a>
                    </div>
                    

                </div>
            </form>
        </div>  
    )
}