
import '../css/gestion.css'

const  allsidemenu = document.querySelectorAll('#sidebar .side-menu.top li a')

allsidemenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', () =>{
        allsidemenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');

    })
})


export default function GestionPage() {
    return (
        <html>
            <head>
            
            </head>
            <body>
                <div class="area"></div><nav class="main-menu">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fa fa-home fa-2x"></i>
                                    <span class="nav-text">
                                        Dashboard
                                    </span>
                                </a>
                            
                            </li>
                            <li class="has-subnav">
                                <a href="#">
                                <i class="fa fa-list fa-2x"></i>
                                    <span class="nav-text">
                                        Eventos
                                    </span>
                                </a>
                                
                            </li>
                            <li class="has-subnav">
                                <a href="#">
                                <i class="fa fa-users fa-2x"></i>
                                    <span class="nav-text">
                                        Asistentes
                                    </span>
                                </a>
                            
                            </li>
                
                            <li>
                                <a href="#">
                                <i class="fa fa-info fa-2x"></i>
                                    <span class="nav-text">
                                        Documentation
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <ul class="logout">
                            <li>
                            <a href="#">
                                    <i class="fa fa-power-off fa-2x"></i>
                                    <span class="nav-text">
                                        Cerrar sesión
                                    </span>
                                </a>
                            </li>  
                        </ul>
                    </nav>
            </body>
        </html>
    )
}