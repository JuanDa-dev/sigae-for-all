import { useState, useCallback } from 'react'
import AttendeesPage from './attendeesPage'
import Dashboard from './dashboard'
import EventsPage from './eventsPage'
import AuthContext  from '../components/authProvider'
import CreateEventPage from './createEventPage'
import { useContext } from 'react'
import '../css/gestion.css'
import { useNavigate } from 'react-router-dom'

export default function GestionPage() {
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(AuthContext)
    const pages = {
        'Dashboard': <Dashboard auth={auth} />,
        'Eventos': <EventsPage auth={auth} />,
        'Asistentes': <AttendeesPage auth={auth} />,
        'crear evento': <CreateEventPage auth={auth} />
    }
    const [selectedPage, setSelectedPage] = useState(Object.keys(pages)[0])
    const elements = {
        'Dashboard': ['active', 'home'],
        'Eventos': ['has-subnav', 'list'],
        'Asistentes': ['has-subnav', 'users'],
        'crear evento': ['', 'list']
    }
    const logout = () => {
        setAuth(undefined)
        localStorage.setItem('user', undefined)
        navigate('/login')
    }

    const wrapperRef = useCallback((id) => {
        const allsidemenu = document.querySelectorAll('.main-menu .elements li')
        allsidemenu.forEach(item => item.classList.remove('active'))
        const element = document.getElementById(id)
        element.classList.add('active')
        setSelectedPage(id)
    }, [])

    return (
        <>
            <div className="area">{pages[selectedPage]}</div>
            <nav className="main-menu">
                <ul className="elements">
                    {Object.keys(elements).map((key, index) => {
                        return (
                            <li id={key} key={index} className={elements[key][0]}>
                                <a onClick={e => {wrapperRef(key)}}>
                                    <i className={`fa fa-${elements[key][1]} fa-2x`}></i>
                                    <span className="nav-text">{key}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="logout">
                    <li>
                        <a onClick={logout} >
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Cerrar sesión
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}