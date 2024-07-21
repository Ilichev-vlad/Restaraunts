import { TabBarList } from "./component"

export const TabBarListContainer = ({restaurantIds, setCurrentRest}) => {
    
    if (!restaurantIds?.length) {
        return null;
    }

    return (
        <TabBarList restaurantIds={restaurantIds} setCurrentRest={setCurrentRest}/>
    )
}