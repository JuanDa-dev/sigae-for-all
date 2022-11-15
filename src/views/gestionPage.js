
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
        <div id="sidebar"> 
            <a href="#" class="brand">
                
                <i class="bx fa-conf"></i>
                <span class="text">AdminPage</span>
            </a>
            <ul class="side-menu top">
                <li class="active">
                    <a href="#">
                        <i class="bx fas fa-ellipsis-v"></i>
                        <span class="text">Menu</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx fas fa-bookmark'></i>
                        <span class="text">Eventos</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx fas fa-user' ></i>
                        <span class="text">Asistentes</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx fas fa-question' ></i>
                        <span class="text">Como usar la plataforma</span>
                    </a>
                </li>
                
            </ul>
            <ul class="side-menu">
                <li>
                    <a href="#">
                        <i class='bx fas fa-user'></i>
                        <span class="text">About us</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="logout">
                        <i class="bx fas fa-sign-out-alt"></i>
                        <span class="text">Logout</span>
                    </a>
                </li>
            </ul>
        

        </div>
    )
}