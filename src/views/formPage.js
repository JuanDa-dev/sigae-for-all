import { postRequest, getRequest } from '../components/requests';
import { useParams } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid';
import { useState } from 'react';
import '../css/form.css'

export default function FormPage() {
    const { form_id } = useParams();
    const [attendee, setAttendee] = useState({
        name: "",
        lastName: "",
        gender: "",
        email: "",
        role: "",
        birthdate: "",
        city: "",
        cellphone: "",
        info: "",
        event_id: "",
        qrcode_description: "",
        qrcode_id: ""
    })
    const items = {
      "fname": ["Nombre", "text"],
      "lname": ["Apellidos", "text"],
      "genre": ["Género", "text"],
      "eaddress": ["Correo electrónico", "email"],
      "role": ["Rol", "rol"],
      "birthdate": ["Fecha de Nacimiento", "date"],
      "address2": ["Ciudad", "text"],
      "phone": ["Teléfono celular", "tel"],
      "extrdata": ["Información adicional", "extradata"]
    }
    const questions = ["Teléfono", "Correo", "Cualquiera"]

    const sendData = async (e) => {
        e.preventDefault()
        attendee.birthdate = new Date(attendee.birthdate)
        const qrcode_id = uuidV4()
        const event_id = (await getRequest({ 
            name: `data_events/event_by_form/${form_id}`,
        })).id
        attendee.qrcode_description = `${process.env.REACT_APP_URL}/api/data_events/attendees/${qrcode_id}`
        attendee.qrcode_id = qrcode_id
        setAttendee(attendee)
        const response = await postRequest({ 
            name: `data_events/attendees/${event_id}`,
            payload: attendee
        })
        console.log(response)
    }
  
    return(
        <div className="testbox">
            <form onSubmit={sendData}>
                <div className="banner"><h1>Inscripción al evento</h1></div>
                <div className="colums">
                    {Object.keys(items).map((key, index) => {
                        const [name, type] = items[key]
                        const value = Object.keys(attendee)[Object.keys(items).indexOf(key)]
                        return (
                            <div key={index} className="item">
                                <label htmlFor={key}>{name}<span>*</span></label>
                                <input id={key} type={type} onChange={e => {
                                    attendee[value] = e.target.value;
                                    setAttendee(attendee)
                                }} name={key} required />
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
                                    <input type={name} value={question} id={name} name="contact"/>
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