import { useFormik } from "formik";
import axios from "./config/axios";
import EventContext from "./Contexts/EventContext";
import { useContext } from "react";
import { SET_EVENT, SET_SERVER_ERROR } from "./action-types/Event";

export default function EventForm() {
    const { EventDispatch } = useContext(EventContext);
    const formik = useFormik({
        initialValues: {
            name: "",
            dateTime: "",
            address: ""
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            axios.post('/api/event', values)
                .then((response) => {
                   const result = response.data;
                   console.log(result);
                   EventDispatch({ type: SET_EVENT, payload: result });
                   resetForm();
                })
                .catch((err) => {
                   console.log(err);
                   EventDispatch({ type: SET_SERVER_ERROR, payload: err.message });
                })
        }
    })
    return(
        <div>
        <h2>Event Form</h2>
        <form onSubmit={formik.handleSubmit}>
           <label>Enter Event Name</label><br/>
           <input type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
           /><br/>
           <label>Enter DateTime</label><br/>
           <input type="date"
                name="dateTime"
                value={formik.values.dateTime}
                onChange={formik.handleChange}
           /><br/>
           <label>Enter Address</label><br/>
           <input type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
           /><br/>
           <input type="submit"/>
        </form>
        </div>
    )
}