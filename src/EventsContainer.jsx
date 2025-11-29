import EventForm from "./EventForm";
import EventMap from "./EventMap";
import EventsTable from "./EventsTable";

export default function EventsContainer() {
    return(
        <div>
            <h1>Artist Events Location Tracker</h1>
            <EventsTable />
            <EventForm />
            <EventMap />
        </div>
    )
}