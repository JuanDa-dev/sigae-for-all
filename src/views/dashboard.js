export default function Dashboard({ auth }) {
    return <div>
        <h2>Bienvenido.</h2>
        <h3>Usuario: {auth.name}</h3>
    </div>
}