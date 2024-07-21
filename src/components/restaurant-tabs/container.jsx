import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabs } from "./component"
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurant";
import { useEffect, useState } from "react";
import { selectRestaurantRequestStatus } from "../../redux/entities/restaurant/restaurant";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";

export const RestaurantTabsContainer = () => {
    
    const restaurantIds = useSelector(selectRestaurantIds);
    const [currentRestId, setCurrentRestId] = useState(restaurantIds?.[0] || undefined);
    const requestStatus = useSelector(selectRestaurantRequestStatus);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getRestaurants());
    }, [dispatch]);

    if (requestStatus === "idle" || requestStatus === "pending") {
      return "loading";
    }
  
    if (requestStatus === "rejected") {
      return "error";
    }

    if (!restaurantIds.length) {
        return 'Ошибка получения данных';
    }

    return <RestaurantTabs 
        restaurantIds={restaurantIds} 
        currentRestId={currentRestId} 
        setCurrentRest={setCurrentRestId}/>
}