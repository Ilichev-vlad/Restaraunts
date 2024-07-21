import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../user-context/hooks";
import { ReviewList } from "./component";
import { selectUserRequestStatus } from "../../redux/entities/user/user";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/get-users";
import { selectReviewIds, selectReviewRequestStatus } from "../../redux/entities/review/review";
import { getReviews } from "../../redux/entities/review/get-reviews";


export const ReviewListContainer = ({restaurantId}) => {
    const { isAuthorized } = useUser();
    const reviewIds = useSelector(selectReviewIds);
    const reviewRequestStatus = useSelector(selectReviewRequestStatus);
    const userRequestStatus = useSelector(selectUserRequestStatus);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUsers());
      dispatch(getReviews(restaurantId))
    }, [dispatch, restaurantId]);

    if (reviewRequestStatus === "idle" || reviewRequestStatus === "pending") {
        return "loading reviews data";
    }

    if (reviewRequestStatus === "rejected") {
        return "error reviews users";
    }

    if (userRequestStatus === "idle" || userRequestStatus === "pending") {
        return "loading users data";
    }

    if (userRequestStatus === "rejected") {
        return "error loading users";
    }
    
    if (!reviewIds?.length) {
        return null;
    }

    return (<ReviewList reviewIds={reviewIds} isAuthorized={isAuthorized}/>)
}