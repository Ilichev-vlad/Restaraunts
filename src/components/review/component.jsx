import { ReviewForm } from "../review-form/component";

export const Reviews = ({reviews}) => {

    if (!reviews?.length) {
        return null;
    }

    return (
        <div>
            <h3>REVIEWS</h3>
            <div>
                {
                    reviews?.length 
                    ? <ul>{reviews.map(({user, text}) => <li>{user}: {text}</li>)}</ul>
                    : 'Review is empty'
                }
            </div>
            <ReviewForm/>
        </div>
    );
}