import { useUser } from "../user-context/hooks";
import { ReviewList } from "./component";


export const ReviewListContainer = ({reviewIds}) => {
    const { isAuthorized } = useUser();

    if (!reviewIds?.length) {
        return null;
    }

    return (<ReviewList reviewIds={reviewIds} isAuthorized={isAuthorized}/>)
}