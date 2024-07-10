import { useReducer } from "react";

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 5
};

const minRating = 1;
const maxRating = 5;

function reducer(state, { type, payload }) {
    switch (type) {
        case "setName":
            return { ...INITIAL_FORM, name: payload };
        case "setText":
            return { ...state, text: payload };
        case "setRating":
            return { ...state, rating: payload };
        case "incrementRating":
            return { ...state, rating: Math.min(maxRating, state.rating + 1) };
        case "decrementRating":
            return { ...state, rating: Math.max(minRating, state.rating - 1) };
        case "clear":
            return INITIAL_FORM;
        default:
            return state;
    }
}

export const useForm = () => {  
    return useReducer(reducer, INITIAL_FORM);
}