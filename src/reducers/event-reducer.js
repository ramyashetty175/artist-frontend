import { SET_EVENT, SET_SERVER_ERROR, SET_SELECTED_EVENT } from "../action-types/Event";

const Eventreducer = (state, action) => {
    switch(action.type) {
        case SET_EVENT: {
            return{ ...state, isLoading: false, status: "success", data: [...state.data, action.payload], serverErrorMsg: "" }
        }
        case SET_SELECTED_EVENT: {
            return { ...state, selectedEvent: action.payload }
        }
        case SET_SERVER_ERROR: {
            return{ ...state, isLoading: false, status: "failure", data: [], serverErrorMsg: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}

export default Eventreducer;