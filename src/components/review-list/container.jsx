import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../user-context/hooks";
import { ReviewList } from "./component";
import { selectUserRequestStatus } from "../../redux/entities/user/user";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/get-users";
import { selectReviewRequestStatus } from "../../redux/entities/review/review";
import { getReviews } from "../../redux/entities/review/get-reviews";


export const ReviewListContainer = ({restaurantId, reviewIds}) => {
    const { isAuthorized } = useUser();
    const reviewRequestStatus = useSelector(selectReviewRequestStatus);
    const userRequestStatus = useSelector(selectUserRequestStatus);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUsers());
      dispatch(getReviews(restaurantId))
    }, [dispatch, restaurantId]);

    if (
        reviewRequestStatus === "idle" || reviewRequestStatus === "pending" ||
        userRequestStatus === "idle" || userRequestStatus === "pending"
    ) {
        return "loading data";
    }

    if (reviewRequestStatus === "rejected" || userRequestStatus === "rejected") {
        return "error during server request";
    }

    return (<ReviewList reviewIds={reviewIds} isAuthorized={isAuthorized}/>)
}