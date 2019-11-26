import { COUNTER } from "../actions/counterAction";

const initalState = {
    fetching: false,
    success: false,
    error: null,
    counter: 0
};

export default function counter(state = initalState, action) {
    switch (action.type) {
        case COUNTER.GET:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case COUNTER.SET:
            const { data } = action;
            return {
                ...state,
                fetching: false,
                success: true,
                counter: data,
            }
        case COUNTER.ERROR:
            return {
                ...state,
                fetching: false,
                success: false,
                error: action.error
            };
        default:
            return state;
    }
}