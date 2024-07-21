import { RestaurantContainer } from "../restaurant/containter"
import { TabBarListContainer } from "../tabBar-list/container"

export const RestaurantTabs = ({restaurantIds, currentRestId, setCurrentRest}) => {
    return (
        <>
            <TabBarListContainer restaurantIds={restaurantIds} setCurrentRest={setCurrentRest} />
            <RestaurantContainer id={currentRestId} />
        </>
    )
}