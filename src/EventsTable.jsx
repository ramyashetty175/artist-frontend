import { useContext } from "react"
import EventContext from "./Contexts/EventContext"

export default function EventsTable() {
    const { data, EventDispatch } = useContext(EventContext);
    const handleView = (event) => {
    EventDispatch({ type: "SET_SELECTED_EVENT", payload: event });
    };
    return(
        <div>
            <h2>Listing Events</h2>
            <table border="1">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>lat</th>
                  <th>lng</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  { data.map((ele) => {
                    return(
                        <tr key={ele._id}>
                            <td>{ele.name}</td>
                            <td>{ele.address}</td>
                            <td>{ele.geo[0]}</td>
                            <td>{ele.geo[1]}</td>
                            <td>  
                                <button onClick={() => handleView(ele)}>View</button>
                            </td>
                        </tr>
                    )
                  })}
                </tbody>
            </table>
        </div>
    )
}