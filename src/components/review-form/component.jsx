import { Counter } from "../counter/component";
import { useForm } from "./hooks";

export const ReviewForm = () => {
    const [form, dispatch] = useForm();
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
                <span>Рейтинг</span>
                <Counter value={rating} 
                    increment={() => dispatch({ type: "incrementRating" })}
                    decrement={() => dispatch({ type: "decrementRating" })}
                />
            </div>
            <div>
                <button onClick={() => dispatch({ type: "clear" })}>Сохранить</button>
            </div>
        </div>
    );
}