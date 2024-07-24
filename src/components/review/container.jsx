import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/review";

export const ReviewContainer = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));

    if (!review) {
        return null;
    }

    const {userId, text} = review;

    return (
        <Review userId={userId} text={text}></Review>
    );
}