import { getRequest, deleteRequest } from "../components/requests"
import { useEffect, useState } from "react"
import ColumnsRows from "./ColumnsRows"

export default function EventsPage({ auth }) {
    const [events, setEvents] = useState([])
    const [eventSelected, setEventSelected] = useState(null)
    
    const getData = async () => {
        const response = await getRequest({ 
            name: `events/get_all/${auth.id}`,
            token: auth.token
        })
        if(typeof response !== 'string') {
            setEvents(response.map(res => {
                const newEvent = Object.assign({}, res)
                const form_id = newEvent.form_id
                const start_date = newEvent.start_date.slice(0, 10)
                const end_date = newEvent.end_date.slice(0, 10)
                //Eliminar llaves
                delete newEvent.form_id
                delete newEvent.user_id
                delete newEvent.start_date
                delete newEvent.end_date
                //Nuevos datos
                const location = window.location
                newEvent['start date'] = start_date
                newEvent['end date'] = end_date
                newEvent['link form'] = `${location.origin}/form/${form_id}`
    
                return newEvent
            }))
            setEventSelected(response[0].name)
        }
    }

    const deleteData = async (e) => {
        e.preventDefault()
        const event = events.find(ev => ev.name === eventSelected)
        const response = await deleteRequest({
            name: `events/delete/${event.id}`,
            token: auth.token
        })
        setEvents(events.filter(ev => ev.id !== event.id))
    }

    useEffect(() => {
        getData()
    },  [])

    return (<>
        <form style={{marginBottom: "20px"}} onSubmit={deleteData}>
            <label htmlFor="cars" style={{marginRight: "20px"}}>Choose a event:</label>
            <select style={{marginRight: "20px"}} onChange={e => {
                setEventSelected(e.target.value)
            }} name="cars" id="cars">
                {events.map((event, index) => <option key={index} value={event.name}>{event.name}</option>)}
            </select>
            <button type="submit">Delete event</button>
        </form>
        <ColumnsRows title={"Events"} dataPage={events} />
    </>)
}