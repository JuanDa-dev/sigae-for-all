export default function Dashboard({ auth }) {
    return 
    <div>Dashboard
        <h1>Bienvenido.</h1>
        <h2>Usuario: {auth.name}</h2>
    </div>
}