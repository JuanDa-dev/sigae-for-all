import { getRequest } from "../components/requests"
import { useEffect, useState } from "react"
import ColumnsRows from "./ColumnsRows"

export default function AttendeesPage({ auth }) {
    const [events, setEvents] = useState([])
    const [eventSelected, setEventSelected] = useState(null)
    const [attendees, setAttendees] = useState([])

    const getData = async () => {
        const response = await getRequest({
            name: `events/get_all/${auth.id}`,
            token: auth.token
        })
        if (typeof response !== 'string') {
            setEvents(response)
            setEventSelected(response[0].name)
            const response2 = await getRequest({
                name: `data_events/attendees/${response[0].id}`,
                token: auth.token
            })
            if(typeof response2 !== 'string') setAttendees(response2)
        }
    }

    const changeData = async (e) => {
        e.preventDefault()
        const event = events.find(ev => ev.name === eventSelected)
        const response2 = await getRequest({
            name: `data_events/attendees/${event.id}`,
            token: auth.token
        })
        setAttendees(response2)
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>
        <form style={{ marginBottom: "20px" }} onSubmit={changeData}>
            <label htmlFor="cars" style={{ marginRight: "20px" }}>Choose a event:</label>
            <select style={{ marginRight: "20px" }} onChange={e => {
                setEventSelected(e.target.value)
            }} name="cars" id="cars">
                {events.map((event, index) => <option key={index} value={event.name}>{event.name}</option>)}
            </select>
            <button type="submit">Change event</button>
        </form>
        <ColumnsRows title={"Attendees"} dataPage={attendees} />
    </>)
}