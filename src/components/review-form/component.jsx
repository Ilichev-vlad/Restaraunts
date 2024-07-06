import { useReducer } from "react";
import { Counter } from "../counter/component";

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 0
};

function reducer(state, { type, payload }) {
    switch (type) {
      case "setName":
        return { ...INITIAL_FORM, name: payload };
      case "setText":
        return { ...state, text: payload };
      case "setRating":
        return { ...state, rating: payload };
      case "clear":
        return INITIAL_FORM;
      default:
        return state;
    }
}

const useForm = (initialValue) => {
    return useReducer(reducer, initialValue);
};

export const ReviewForm = ({id}) => {
    const [form, dispatch] = useForm(INITIAL_FORM);
    const { name, text, rating } = form;

    return (
        <div>
            <div>
                <span>Имя</span>
                <input value={name} 
                    onChange={(event) => {
                        dispatch({ type: "setName", payload: event.target.value });
                    }}
                />
            </div>
            <div>
                <span>Текст</span>
                <input value={text} 
                    onChange={(event) => {
                        dispatch({ type: "setText", payload: event.target.value });
                    }}
                />
            </div>
            <div>
                <span>Рейтинг: {rating}</span>
                <Counter key={id} minValue={1} maxValue={5} onChange={(value) => {
                    dispatch({ type: "setRating", payload: value });
                }}/>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "clear" })}>Сохранить</button>
            </div>
        </div>
    );
}