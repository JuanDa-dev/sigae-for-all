import { postRequest } from '../components/requests';
import { useState } from 'react';
import '../css/form.css'

export default function CreateEventPage({ auth }) {  
    const [event, setEvent] = useState({
        name: "",
        start_date: "",
        end_date: "",
        location: "",
        info: "",
        user_id: ""
    })
    const items = {
      "name": ["Nombre del evento", "text"],
      "startd": ["Fecha de inicio", "date"],
      "endd": ["Fecha de fin", "date"],
      "loc": ["Ubicación", "text"],
      "info": ["Informacion adicional", "text"],
    }    

    const sendData = async (e) => {
        e.preventDefault()        
        event.user_id = auth.id
        event.start_date = new Date(event.start_date)
        event.end_date = new Date(event.end_date)     
        const response = await postRequest({ 
            name: `events/create/`,
            payload: event,
            token: auth.token
        })
        const form = {
            name: event.name,
            date: event.start_date,
            description: `El evento ${event.name} inicia el ${event.start_date} y termina el ${event.end_date}`
        }
        const response2 = await postRequest({
            name: `data_events/createform/${response.id}`,
            payload: form,
            token: auth.token
        })
        event.form_id = response2.id
        setEvent(event)
        console.log(event)
    }
  
    return(
        <div className="testboxEvent">
            <form onSubmit={sendData}>
                <div className="banner"><h1>Creacion de evento</h1></div>
                <div className="colums">
                    {Object.keys(items).map((key, index) => {
                        const [name, type] = items[key]
                        const value = Object.keys(event)[Object.keys(items).indexOf(key)]
                        return (
                            <div key={index} className="item">
                                <label htmlFor={key}>{name}<span>*</span></label>
                                <input id={key} type={type} onChange={e => {
                                    event[value] = e.target.value;
                                    setEvent(event)
                                }} name={key} required />
                            </div>
                        )
                    })}
                </div>                        
                <div className="btn-block">
                    <button type="submit">Enviar datos</button>
                </div>
            </form>
        </div>
    )
}