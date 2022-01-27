import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef, useState } from "react";
import AddEventModal from "./AddEventModal";
import axios from "axios";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useRecoilValueLoadable } from "recoil";
import { getUserSelector } from "../State/Selectors/user";

const Calendar = () => {
    const { data: session } = useSession()

    const user = useRecoilValueLoadable(getUserSelector(session && session.user.uid))

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);

    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarAPI = calendarRef.current.getApi();
        calendarAPI.addEvent(event);
    }

    async function handleEventAdd(data) {
        console.log(data.event);
        await axios.post("http://localhost:3001/add/events", data.event);
    }

    async function handleDateSet(data) {
        const response = await axios.get("http://localhost:3001/calendar/events?start=" + moment(data.start).toISOString() + "&end=" + moment(data.end).toISOString());
        setEvents(response.data);
    }

    return (
        <section>
            {user.contents.isAdmin &&
                <button onClick={() => setModalOpen(true)}>Add Event</button>}

            <div className="z-0 relative">
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={date => handleDateSet(date)}

                />
            </div>

            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
        </section>
    );
};

export default Calendar;