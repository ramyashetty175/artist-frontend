//import './App.css'
import { useEffect, useContext, useReducer } from "react";
import EventContext from "./Contexts/EventContext";
import Eventreducer from "./reducers/event-reducer";
import EventsContainer from "./EventsContainer";

const initialState = {
  data: [],
  selectedEvent: null,
  isLoading: true,
  status: "idle",
  serverErrorMsg: ""
}

export default function App() {
  const [Event, EventDispatch] = useReducer(Eventreducer, initialState);
  return(
    <div>
      <EventContext.Provider value={{ ...Event, EventDispatch }}>
        <EventsContainer />
      </EventContext.Provider>
    </div>
  )
}