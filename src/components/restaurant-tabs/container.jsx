import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component"
import { selectRestaurantIds } from "../../redux/entities/restaurant";
import { useState } from "react";

export const RestaurantTabsContainer = () => {
    
    const restaurantIds = useSelector((state) => selectRestaurantIds(state));
    const [currentRestId, setCurrentRestId] = useState(restaurantIds ? restaurantIds[0] : undefined);

    if (!restaurantIds.length) {
        return 'Ошибка получения данных';
    }

    const setCurrentRest = (currentRestId) => {
        setCurrentRestId(currentRestId);
    }


    return <RestaurantTabs restaurantIds={restaurantIds} currentRestId={currentRestId} setCurrentRest={setCurrentRest}/>
}