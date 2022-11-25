import AuthContext  from '../components/authProvider'
import { useContext } from 'react'
import '../css/form.css'

export default function FormPage() {
    const { auth } = useContext(AuthContext)
  
    const items = {
      "fname": ["Nombre", "text"],
      "lname": ["Apellidos", "text"],
      "genre": ["Género", "text"],
      "address2": ["Cidudad", "text"],
      "birthdate": ["Fecha de Nacimiento", "date"],
      "eaddress": ["Correo electrónico", "email"],
      "phone": ["Teléfono celular", "tel"],
      "extrdata": ["Información adicional", "extradata"]
    }
    const questions = ["Teléfono", "Correo", "Cualquiera"]

    const sendData = async (e) => {
        e.preventDefault()
    }
  
    return(
        <div className="testbox">
            <form onSubmit={sendData}>
                <div className="banner"><h1>Pre-inscripción al evento</h1></div>
                <div className="colums">
                    {Object.keys(items).map((key, index) => {
                        const [name, type] = items[key]
                        return (
                            <div key={index} className="item">
                                <label htmlFor={key}>{name}<span>*</span></label>
                                <input id={key} type={type} name={key} required />
                            </div>
                        )
                    })}
                </div>
        
                <div className="question">
                    <label>¿Por donde prefieres ser contactado? </label>
                    <div className="question-answer">
                        {questions.map((question, index) => {
                            const name = 'radio'
                            const element = `${name}_${index + 4}`
                            return (
                                <div key={index}>
                                    <input type={name} value="none" id={name} name="contact"/>
                                    <label htmlFor={element} className={name} ><span>{question}</span></label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h2>Términos y condiciones</h2>
                <input type="checkbox" name="checkbox1" />
                <label>Nos asegura que los datos que nos acaba de suministrar son fieles a la realidad que corresponde, y así mismo consiente que esta información sea almacenada en una base de datos y usada para la identificación dentro del evento con fines administrativos.</label>
                <div className="btn-block">
                    <button type="submit">Enviar datos</button>
                </div>
            </form>
        </div>
    )
}