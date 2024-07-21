import { Button } from "../button/component";
import { Counter } from "../counter/component";
import { useUser } from "../user-context/hooks";
import { useForm } from "./hooks";

import styles from './styles.module.css';
import classNames from "classnames";

export const ReviewForm = () => {
    const { isAuthorized } = useUser();
    const [form, dispatch] = useForm();
    const { name, text, rating } = form;

    return (
        isAuthorized 
        ?  <details className={classNames(styles.sectionWrapper)} open>
            <summary className={classNames(styles.sectionTitle)}>REVIEW FORM</summary>
            <div className={classNames(styles.flexibleAttributes)}>
                <span>NAME: </span>
                <input value={name} 
                    onChange={(event) => {
                        dispatch({ type: "setName", payload: event.target.value });
                    }}
                />
            </div>
            <div className={classNames(styles.flexibleAttributes)}>
                <span>TEXT: </span>
                <input value={text} 
                    onChange={(event) => {
                        dispatch({ type: "setText", payload: event.target.value });
                    }}
                />
            </div>
            <div className={classNames(styles.flexibleAttributes)}>
                <span>RATING: </span>
                <Counter value={rating} 
                    increment={() => dispatch({ type: "incrementRating" })}
                    decrement={() => dispatch({ type: "decrementRating" })}
                />
            </div>
            <div>
                <Button text='Сохранить' onClickHandler={() => dispatch({ type: "clear" })}/>
            </div>
        </details>
        : null
    );
}