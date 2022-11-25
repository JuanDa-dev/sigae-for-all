import { useState, useCallback } from 'react'
import AttendeesPage from './attendeesPage'
import Dashboard from './dashboard'
import DocumentationPage from './documentationPage'
import EventsPage from './eventsPage'
import AuthContext  from '../components/authProvider'
import { useContext } from 'react'
import '../css/gestion.css'

export default function GestionPage() {
    const { auth } = useContext(AuthContext)
    const pages = {
        Dashboard: <Dashboard />,
        Eventos: <EventsPage />,
        Asistentes: <AttendeesPage />,
        Documentacion: <DocumentationPage />
    }
    const [selectedPage, setSelectedPage] = useState(Object.keys(pages)[0])
    const elements = {
        'Dashboard': ['active', '#', 'home'],
        'Eventos': ['has-subnav', '#', 'list'],
        'Asistentes': ['has-subnav', '#', 'users'],
        'Documentacion': ['', '#', 'info']
    }

    const wrapperRef = useCallback((id) => {
        const allsidemenu = document.querySelectorAll('.main-menu .elements li')
        allsidemenu.forEach(item => item.classList.remove('active'))
        const element = document.getElementById(id)
        element.classList.add('active')
        setSelectedPage(pages[id])
    }, [])

    return (
        <>
            <div className="area">{pages[selectedPage]}</div>
            <nav className="main-menu">
                <ul className="elements">
                    {Object.keys(elements).map((key, index) => {
                        return (
                            <li id={key} key={index} className={elements[key][0]}>
                                <a href={elements[key][1]} onClick={e => {wrapperRef(key)}}>
                                    <i className={`fa fa-${elements[key][2]} fa-2x`}></i>
                                    <span className="nav-text">{key}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="logout">
                    <li>
                        <a href="#">
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