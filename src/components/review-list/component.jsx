import { ReviewForm } from "../review-form/component";
import { ReviewContainer } from "../review/container";
import styles from './styles.module.css';

export const ReviewList = ({reviewIds, isAuthorized}) => {
    return (
        <div>
            <details className={styles.sectionWrapper} open>
                <summary className={styles.sectionTitle}>REVIEWS</summary>
                {<ul>{reviewIds.map((id) => <ReviewContainer key={id} id={id}/> )}</ul>}
            </details>
            {isAuthorized ? <ReviewForm/> : null}
        </div>
    )
}