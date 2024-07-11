import { ReviewForm } from "../review-form/component";
import styles from './styles.module.css';
import classNames from "classnames";

export const Reviews = ({reviews}) => {

    if (!reviews?.length) {
        return null;
    }

    return (
        <div>
            <details className={classNames(styles.sectionWrapper)} open>
                <summary className={classNames(styles.sectionTitle)}>REVIEWS</summary>
                {
                    reviews?.length 
                    ? <ul>{reviews.map(({user, text}) => <li>{user}: {text}</li>)}</ul>
                    : 'Review is empty'
                }
            </details>
            <ReviewForm/>
        </div>
    );
}